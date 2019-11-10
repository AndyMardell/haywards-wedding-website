import React from 'react'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import Scroll from '../components/scroll'
import Image from '../components/image'
import { animated } from 'react-spring'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import useAnimate from '../hooks/useAnimate'

const HeaderSplash = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`

const H1 = styled(animated.h1)`
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin-top: 0;
  line-height: 1;
  text-align: center;
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '40px',
      toSize: '85px'
    },
    '400px',
    '1000px'
  )}
`

const H2 = styled(animated.h2)`
  text-align: center;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1;
  ${fluidRange(
    {
      prop: 'padding-top',
      fromSize: '1px',
      toSize: '10px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '13px',
      toSize: '21px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'letter-spacing',
      fromSize: '3px',
      toSize: '7px'
    },
    '400px',
    '1000px'
  )}
`

const StyledBackground = styled(Image)`
  bottom: 2vw;
  left: 2vw;
  right: 2vw;
  top: 2vw;
  z-index: -1;
`

const Splash = () => {
  const fadeIn = useAnimate()

  return (
    <>
      <HeaderSplash>
        <div>
          <H1 style={fadeIn(500)}>James & Sophie</H1>
          <H2 style={fadeIn(800)}>We&apos;re getting married</H2>
        </div>
        <Scroll />
        <StyledBackground file="autumn" absolute />
      </HeaderSplash>
      <MenuButton fixed />
      <Menu />
    </>
  )
}

export default Splash
