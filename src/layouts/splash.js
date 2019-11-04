import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLayout = styled.div`
  margin-top: 100vh;
  background: white;
  position: relative;
  z-index: 50;
`

const LayoutSplash = ({ children }) => <StyledLayout>{children}</StyledLayout>

LayoutSplash.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutSplash
