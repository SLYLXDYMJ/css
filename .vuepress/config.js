module.exports = {
  dest: './docs',
  base: '/css/',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: 'home',
        link: '/'
      },
      {
        text: 'reset',
        link: '/src/_reset/'
      },
      {
        text: 'layout',
        items: [
          { text: 'grid', link: '/src/_layout/grid/' },
          { text: 'flex', link: '/src/_layout/flex/' },
          { text: 'margin', link: '/src/_layout/margin/' },
          { text: 'padding', link: '/src/_layout/padding/' },
          { text: 'font-size', link: '/src/_layout/font-size/' },
          { text: 'line-height', link: '/src/_layout/line-height/' },
          { text: 'text', link: '/src/_layout/text/' },
          { text: 'hidden', link: '/src/_layout/hidden/' }
        ]
      },
      {
        text: 'component',
        items: [
          { text: 'hamburger', link: '/src/_component/hamburger/' },
          { text: 'scroll-x', link: '/src/_component/scroll-x/' },
          { text: 'background', link: '/src/_component/background/' },
          { text: 'image', link: '/src/_component/image/' }
        ]
      },
      {
        text: 'util',
        items: [
          { text: 'extend', link: '/src/_util/extend/' },
          { text: 'function', link: '/src/_util/function/' },
          { text: 'mixin', link: '/src/_util/mixin/' }
        ]
      }
    ]
  }
}