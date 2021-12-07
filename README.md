# Zeus Documentation

## Introduction

Zeus is an open-source mobile Bitcoin/Lightning node manager and wallet application for lnd, c-lightning, and Eclair. ⚡️

If you have trouble using Zeus, consider joining the [communities listed on the official website]() to get help from community members.

Only file a [Github issue]() for technical issues you can't resolve through other channels or feature requests you've validated with other members of community.

Please check out our [official website](), and [FAQ]() for more details.

## Contributing

Pull requests are welcome and appreciated. To contribute to BTCPay Server, first check the [contributing guidelines]().

### Build the Documentation Locally

In order to build the website locally, you'll need [Node.js](https://nodejs.org/) >= 12.16 (or basically the latest LTS version).

The setup is straight forward:

```bash
# Install dependencies
npm install

# Serve locally (by default on port 8080)
npm start
```

### Text Highlights

There are [three types of text highlights](https://vuepress.vuejs.org/guide/markdown.html#custom-containers) that can be used to display different colored boxes.

A green box displaying a friendly tip:

```md
:::tip
foo
:::
```

A yellow box with a cautious warning:

```md
:::warning
foo
:::
```

A red box with a clear danger, you can also add a title `foo` to any container:

```md
:::danger foo
bar
:::
```

### SEO improvements

We are using the [Vuepress SEO plugin](https://www.npmjs.com/package/vuepress-plugin-seo) to add relevant meta tags to the site and individual pages.

To improve the meta attributes of a specific page, you can add them as YAML frontmatter like this: (see the connect your Lightning node page for an example)

```text
---
description: How to connect your Lightning node to Zeus.
tags:
- Node
- Bitcoin
- Lightning
---
# Connecting your node to Zeus

This document explains how to connect your Lightning node to Zeus.
```

### Embedding YouTube videos

To add a YouTube video with a preview, you can so so by linking to it like this:

```md
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/mqdefault.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

Note that the link item need to be a preview image (either from YouTube or a custom one) to result in an embedded video.