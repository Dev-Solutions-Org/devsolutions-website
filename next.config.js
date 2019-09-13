const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withProgressBar = require('next-progressbar')
const withPlugins = require('next-compose-plugins')
const { withGraphQLConfig } = require('next-graphql-react/server')
const webpack = require('webpack')
require('dotenv').config()

module.exports = withPlugins([
  withGraphQLConfig,
  withCss,
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
  target: 'serverless',
  webpack (config) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    return config
  }
})
