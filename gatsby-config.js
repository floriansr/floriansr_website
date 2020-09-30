const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        services: path.join(__dirname, 'src/services'),
        components: path.join(__dirname, 'src/components'),
        reduxFolder: path.join(__dirname, 'src/redux'),
      }
    },
    { resolve: 'gatsby-plugin-sass' }
  ]
}