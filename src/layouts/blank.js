import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'

const BlankLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default BlankLayout
