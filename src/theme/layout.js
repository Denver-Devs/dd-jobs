import React from 'react'

import Head from '../components/Global/Head'

import { createGlobalStyle } from 'styled-components'
import globalStyles from '../styles/styles'

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`

const Layout = ({ children }) => (
  <div className='app'>
    <Head />
    <GlobalStyle />
    {children}
  </div>
)

export default Layout