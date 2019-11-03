import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledP = styled.p`
  ${({ narrow }) => narrow && `
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  `}
`

const P = ({ children, narrow }) => (
  <StyledP narrow={narrow}>{children}</StyledP>
)

P.propTypes = {
  children: PropTypes.node,
  narrow: PropTypes.bool
}

export default P
