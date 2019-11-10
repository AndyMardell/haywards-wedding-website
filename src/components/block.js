import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledDiv = styled.div`
  ${({ center }) => center && 'text-align: center;'}
  ${fluidRange(
    {
      prop: 'padding-top',
      fromSize: '2rem',
      toSize: '3rem'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'padding-bottom',
      fromSize: '2rem',
      toSize: '3rem'
    },
    '400px',
    '1000px'
  )}
`

const Block = ({ children, center, style, className }) => (
  <StyledDiv style={style} center={center} className={className}>
    {children}
  </StyledDiv>
)

Block.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  center: PropTypes.bool,
  className: PropTypes.string
}

export default Block
