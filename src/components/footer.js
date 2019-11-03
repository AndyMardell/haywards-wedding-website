import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: 0.9em;
  margin-top: 5rem;
`

const Footer = () => (
  <StyledFooter>
    &copy; {new Date().getFullYear()} James & Sophie
  </StyledFooter>
)

export default Footer
