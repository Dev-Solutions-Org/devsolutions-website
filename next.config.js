const withSass = require('@zeit/next-sass')
const withProgressBar = require('next-progressbar')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: 'dev-[hash:base64:5]'
    }
  }],
  [
    withProgressBar, {
      progressBar: {
        profile: true
      }
    }
  ]
], {
  target: 'serverless'
})
