import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fluidRange } from 'polished'
import { useSpring, animated, config } from 'react-spring'

const StyledIntro = styled(animated.div)`
  text-align: center;
  ${fluidRange(
    {
      prop: 'padding-top',
      fromSize: '35px',
      toSize: '90px'
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
    max-width: 550px;
    margin: 0 auto;
  }
`

const Intro = ({ children }) => {
  const introSpring = useSpring({
    config: config.molasses,
    from: {
      opacity: 0,
      transform: 'translateY(30px)'
    },
    opacity: 1,
    transform: 'translateY(0px)'
  })

  return <StyledIntro style={introSpring}>{children}</StyledIntro>
}

Intro.propTypes = {
  children: PropTypes.node
}

export default Intro
