module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          // 删除所有注释
          discardComments: {
            removeAll: true
          }
        }
      ]
    }
  }
}
