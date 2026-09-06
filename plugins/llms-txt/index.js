// @ts-check

/**
 * Emits /llms.txt and /llms-full.txt for LLM agents, per https://llmstxt.org.
 *
 * Both files are generated from the same markdown the site is built from, so
 * they cannot drift from the docs. llms.txt is an index of every page with a
 * one line summary; llms-full.txt inlines the entire corpus (~40k tokens),
 * which is small enough for an agent to read in a single fetch.
 *
 * Page URLs are validated against the sitemap the build just produced, so a
 * future slug or filename change fails the build instead of silently shipping
 * dead links.
 */

const fs = require('fs');
const path = require('path');

const sidebars = require('../../sidebars.js');

// Human readable heading for each sidebar in sidebars.js. Anything missing
// here falls back to the sidebar key, and docs in no sidebar at all land under
// OTHER_SECTION rather than being dropped.
const SECTION_LABELS = {
  usingZeus: 'Using ZEUS',
  lsp: 'Lightning Service Provider (Olympus by ZEUS)',
  swaps: 'Swaps',
  lightningAddress: 'Lightning Address',
  pos: 'Point of Sale',
  contribute: 'Contribute',
};

const OTHER_SECTION = 'Other';

const SUMMARY =
  'ZEUS is a self-custodial mobile Bitcoin and Lightning wallet and node ' +
  'management app. It can run a Lightning node on the phone (Embedded LND or ' +
  'LDK Node) or connect to a remote node, and ships an LSP, submarine swaps, ' +
  'Lightning addresses, Nostr Wallet Connect, Cashu ecash, and a point of sale.';

const collectMarkdownFiles = (dir) =>
  fs
    .readdirSync(dir, {withFileTypes: true})
    .flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectMarkdownFiles(full);
      return entry.isFile() && full.endsWith('.md') ? [full] : [];
    })
    .sort();

/**
 * Minimal frontmatter reader. The docs only use scalar keys plus one folded
 * (`>-`) description, so a YAML dependency would be more surface than value.
 */
const parseFrontmatter = (raw) => {
  // `^---` under /m so an empty block (`---\n---`) matches as readily as a
  // populated one. Several docs ship the empty form.
  const match = raw.match(/^---[ \t]*\r?\n([\s\S]*?)^---[ \t]*\r?\n?/m);
  if (!match) return {data: {}, body: raw};

  const data = {};
  const lines = match[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    const [, key, rawValue] = kv;

    // Folded/literal block: consume the indented lines that follow.
    if (rawValue === '>-' || rawValue === '>' || rawValue === '|') {
      const parts = [];
      while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) {
        parts.push(lines[++i].trim());
      }
      data[key] = parts.join(' ');
      continue;
    }

    data[key] = rawValue.trim().replace(/^["']|["']$/g, '');
  }

  return {data, body: raw.slice(match[0].length)};
};

const stripInlineMarkdown = (text) =>
  text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const isProse = (text) =>
  text &&
  !text.startsWith('#') &&
  !text.startsWith('!') &&
  !text.startsWith('|') &&
  !text.startsWith('<') &&
  !text.startsWith(':::') &&
  !/^-{3,}$/.test(text) &&
  !/^(import|export)\s/.test(text) &&
  // A leading list item is a menu, not a summary; leave those pages bare.
  !/^([-*+]|\d+\.)\s/.test(text);

const firstParagraph = (body) => {
  for (const line of body.split(/\r?\n/)) {
    const text = line.trim();
    if (!isProse(text)) continue;
    const stripped = stripInlineMarkdown(text);
    if (stripped) return stripped;
  }
  return '';
};

/**
 * MDX plumbing carries no meaning once the page is flattened to text, and the
 * page's own H1 is redundant with the heading llms-full.txt emits above it.
 */
const stripMdxImports = (body) =>
  body
    .split(/\r?\n/)
    .filter((line) => !/^(import|export)\s.*$/.test(line.trim()))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s*#\s+.+\r?\n/, '')
    .trim();

const truncate = (text, max = 180) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 60 ? lastSpace : max).trimEnd()}...`;
};

/** Docs id -> route, honouring `slug` frontmatter and index files. */
const permalinkFor = (docId, frontmatter) => {
  if (frontmatter.slug) {
    const slug = frontmatter.slug.startsWith('/')
      ? frontmatter.slug
      : `/${frontmatter.slug}`;
    return slug;
  }
  return docId.endsWith('/index')
    ? `/${docId.slice(0, -'index'.length)}`
    : `/${docId}`;
};

/** Ordered doc ids for one sidebar, flattening nested categories. */
const flattenSidebar = (items, out = []) => {
  for (const item of items) {
    if (typeof item === 'string') {
      out.push(item);
      continue;
    }
    if (item && item.type === 'category') {
      if (item.link && item.link.type === 'doc' && item.link.id) {
        out.push(item.link.id);
      }
      flattenSidebar(item.items || [], out);
      continue;
    }
    if (item && item.type === 'doc' && item.id) out.push(item.id);
  }
  return out;
};

const readSitemapUrls = (outDir) => {
  const sitemapPath = path.join(outDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return null;
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  return new Set(
    [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
  );
};

/**
 * Rewrite relative markdown links so the inlined corpus stays navigable:
 * sibling .md links become absolute page URLs and ../static/img assets become
 * absolute asset URLs. Anything already absolute is left alone.
 */
const absolutifyLinks = (body, doc, docsDir, permalinkByDocId, siteUrl) =>
  body.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (whole, target, title) => {
    if (/^(https?:|mailto:|#)/.test(target)) return whole;

    const suffix = title || '';
    if (target.startsWith('/')) return `](${siteUrl}${target}${suffix})`;

    const [linkPath, anchor = ''] = target.split('#');
    const resolved = path.resolve(path.dirname(doc.file), linkPath);

    const staticMatch = resolved.match(/[/\\]static[/\\](.+)$/);
    if (staticMatch) {
      return `](${siteUrl}/${staticMatch[1].split(path.sep).join('/')}${suffix})`;
    }

    // Both `../foo.md` and Docusaurus' extension-less `./foo` resolve to a doc.
    if (linkPath.endsWith('.md') || !path.extname(linkPath)) {
      const linkedId = path
        .relative(docsDir, resolved)
        .replace(/\\/g, '/')
        .replace(/\.md$/, '');
      const permalink =
        permalinkByDocId.get(linkedId) ||
        permalinkByDocId.get(`${linkedId}/index`);
      if (permalink) {
        const hash = anchor ? `#${anchor}` : '';
        return `](${siteUrl}${permalink}${hash}${suffix})`;
      }
    }

    return whole;
  });

module.exports = function llmsTxtPlugin() {
  return {
    name: 'zeus-llms-txt',

    async postBuild({siteDir, outDir, siteConfig}) {
      const siteUrl = siteConfig.url.replace(/\/$/, '');
      const docsDir = path.join(siteDir, 'docs');

      const docsById = new Map();
      for (const file of collectMarkdownFiles(docsDir)) {
        const raw = fs.readFileSync(file, 'utf8');
        const {data, body} = parseFrontmatter(raw);
        const docId = path
          .relative(docsDir, file)
          .replace(/\\/g, '/')
          .replace(/\.md$/, '');
        const heading = body.match(/^#\s+(.+)$/m);

        docsById.set(docId, {
          docId,
          file,
          body: stripMdxImports(body),
          title:
            data.title ||
            (heading ? stripInlineMarkdown(heading[1]) : docId.split('/').pop()),
          description: data.description || firstParagraph(body),
          permalink: permalinkFor(docId, data),
        });
      }

      // Fail loudly rather than publishing links the site does not serve.
      const sitemapUrls = readSitemapUrls(outDir);
      if (sitemapUrls) {
        const missing = [...docsById.values()]
          .map((doc) => `${siteUrl}${doc.permalink}`)
          .filter((url) => !sitemapUrls.has(url));
        if (missing.length) {
          throw new Error(
            `[llms-txt] These generated URLs are not in sitemap.xml:\n  ${missing.join(
              '\n  ',
            )}`,
          );
        }
      }

      const permalinkByDocId = new Map(
        [...docsById.values()].map((doc) => [doc.docId, doc.permalink]),
      );

      const sections = [];
      const seen = new Set();
      for (const [key, items] of Object.entries(sidebars)) {
        const docs = flattenSidebar(items)
          .filter((docId) => {
            if (seen.has(docId)) return false;
            seen.add(docId);
            return docsById.has(docId);
          })
          .map((docId) => docsById.get(docId));
        if (docs.length) sections.push({label: SECTION_LABELS[key] || key, docs});
      }

      const orphans = [...docsById.values()].filter(
        (doc) => !seen.has(doc.docId),
      );
      if (orphans.length) sections.push({label: OTHER_SECTION, docs: orphans});

      const index = [
        '# ZEUS Documentation',
        '',
        `> ${SUMMARY}`,
        '',
        'This is the official documentation for ZEUS, maintained at',
        'https://github.com/ZeusLN/zeus-docs. Every page is listed below.',
        '',
        `The complete documentation is also available as a single file: ${siteUrl}/llms-full.txt`,
        '',
      ];
      for (const section of sections) {
        index.push(`## ${section.label}`, '');
        for (const doc of section.docs) {
          const description = doc.description
            ? `: ${truncate(doc.description)}`
            : '';
          index.push(`- [${doc.title}](${siteUrl}${doc.permalink})${description}`);
        }
        index.push('');
      }

      const full = [
        '# ZEUS Documentation',
        '',
        `> ${SUMMARY}`,
        '',
        'The complete contents of https://docs.zeusln.app, concatenated for LLM',
        'consumption. Each page below is preceded by its canonical URL.',
        '',
      ];
      for (const section of sections) {
        for (const doc of section.docs) {
          full.push(
            '---',
            '',
            `# ${doc.title}`,
            '',
            `Source: ${siteUrl}${doc.permalink}`,
            '',
            absolutifyLinks(doc.body, doc, docsDir, permalinkByDocId, siteUrl),
            '',
          );
        }
      }

      fs.writeFileSync(path.join(outDir, 'llms.txt'), `${index.join('\n')}\n`);
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), `${full.join('\n')}\n`);

      const pageCount = sections.reduce((sum, s) => sum + s.docs.length, 0);
      console.log(`[llms-txt] Wrote llms.txt and llms-full.txt (${pageCount} pages)`);
    },
  };
};
