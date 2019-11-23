import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fluidRange } from 'polished'
import { animated } from 'react-spring'
import useAnimate from '../hooks/useAnimate'

const StyledIntro = styled(animated.div)`
  text-align: center;
  ${fluidRange(
    {
      prop: 'padding-top',
      fromSize: '40px',
      toSize: '100px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'padding-bottom',
      fromSize: '40px',
      toSize: '100px'
    },
    '400px',
    '1000px'
  )}

  p {
    margin-bottom: 0;
  }
`

const Intro = ({ children }) => {
  const introSpring = useAnimate()
  return <StyledIntro style={introSpring()}>{children}</StyledIntro>
}

Intro.propTypes = {
  children: PropTypes.node
}

export default Intro
