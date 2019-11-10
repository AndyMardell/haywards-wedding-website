import React from 'react'
import PropTypes from 'prop-types'
import { ContextProvider } from '../context'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import SwipeProvider from './swipeProvider'

const Layout = ({ children, location }) => (
  <ContextProvider location={location}>
    <ThemeProvider theme={theme}>
      <SwipeProvider>
        <GlobalStyle />
        {children}
      </SwipeProvider>
    </ThemeProvider>
  </ContextProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
