import React from 'react'
import { animated, useSpring, config } from 'react-spring'
import styled from 'styled-components'

const StyledScroll = styled(animated.div)`
  position: absolute;
  bottom: 5vw;
  width: 100%;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8em;
  font-weight: 800;
  padding-bottom: 5px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  height: 60px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-left: -1px;
    background: white;
    width: 2px;
    height: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`

const Scroll = () => {
  const fadeIn = useSpring({
    delay: 2500,
    config: config.molasses,
    from: { opacity: 0, transform: 'translateY(30px)' },
    opacity: 1,
    transform: 'translateY(0)'
  })

  return (
    <StyledScroll style={fadeIn}>
      Scroll
    </StyledScroll>
  )
}

export default Scroll
