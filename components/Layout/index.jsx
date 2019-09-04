import React from 'react'
import { Header } from '..';
import Footer from './../Footer/index';

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
