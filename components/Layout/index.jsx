import React from 'react'
import Header from './../Header/index';
import Footer from './../Footer/index';

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
