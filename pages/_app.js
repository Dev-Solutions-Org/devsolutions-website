import 'cross-fetch/polyfill'
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import NProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { withGraphQLApp } from 'next-graphql-react'
import { GraphQLProvider } from 'graphql-react'
import { Layout } from '../components'
import { EN_DESCRIPTION, KEYWORDS } from '../constants'
import withReduxStore from '../lib/with-redux-store'
import '../styles/styles.css'

class MyApp extends App {
  render () {
    const { Component, pageProps, graphql, reduxStore } = this.props
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          <link rel='shortcut icon' type='image/x-icon' href='/static/ds-icon.png' />
          <title>Dev Solutions</title>
          <meta
            name='description'
            content={EN_DESCRIPTION}
          />
          <meta
            name='keywords'
            content={KEYWORDS}
          />
          <meta name='author' content='Dev Solutions' />
          <meta name='copyright' content='Dev Solutions' />
          <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossOrigin='anonymous' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat&display=swap' rel='stylesheet' />
        </Head>
        <NProgress color='#6e9872' spinner={false} />
        <Provider store={reduxStore}>
          <Layout>
            <GraphQLProvider graphql={graphql}>
              <Component {...pageProps} />
            </GraphQLProvider>
          </Layout>
        </Provider>
      </>
    )
  }
}

export default withGraphQLApp(withReduxStore(MyApp))
