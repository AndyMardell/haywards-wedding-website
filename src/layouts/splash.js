import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledLayout = styled.div`
  margin-top: 100vh;
  background: white;
  position: relative;
  z-index: 50;

  ${fluidRange(
    {
      prop: 'padding-left',
      fromSize: '20px',
      toSize: '40px'
    },
    '500px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'padding-right',
      fromSize: '20px',
      toSize: '40px'
    },
    '500px',
    '1000px'
  )}
`

const LayoutSplash = ({ children }) => <StyledLayout>{children}</StyledLayout>

LayoutSplash.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutSplash
