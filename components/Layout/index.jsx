import React from 'react'
import { Header, Footer } from '..'

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
