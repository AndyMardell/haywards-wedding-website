import React from 'react'
import PropTypes from 'prop-types'
import { ContextProvider } from '../context'
import '../css/app.styl'

const Layout = ({ children, location }) => (
  <ContextProvider location={location}>
    {children}
  </ContextProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
