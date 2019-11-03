import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fluidRange } from 'polished'

const StyledIntro = styled.div`
  text-align: center;
  ${fluidRange(
    {
      prop: 'padding-top',
      fromSize: '25px',
      toSize: '50px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'padding-bottom',
      fromSize: '40px',
      toSize: '60px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '13px',
      toSize: '18px'
    },
    '400px',
    '1000px'
  )}

  p {
    max-width: 550px;
    margin: 0 auto;
  }
`

const Intro = ({ children }) => (
  <StyledIntro>{children}</StyledIntro>
)

Intro.propTypes = {
  children: PropTypes.node
}

export default Intro
