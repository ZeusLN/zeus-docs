<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink
      :to="$localePath"
      class="home-link"
    >
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </RouterLink>

    <NavLinks class="can-hide" />

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >

      <NavLinks class="can-hide social" :links="$site.themeConfig.social" />

    </div>
  </header>
</template>

<script>
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import { toggleColorMode } from '../../themeSwitch'

export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    }

  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  methods: {
    toggleColorMode
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  display flex
  align-items center
  justify-content space-between
  a, span, img
    display inline-block
  .home-link
    display flex
    align-items center
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.75rem
  .site-name
    font-size 1.25rem
    font-weight 600
  .links
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    display flex
    align-items center

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none

@media (max-width: 1100px)
  .navbar
    .links .nav-links
      display none
</style>
