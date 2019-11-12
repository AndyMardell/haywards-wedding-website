import React from 'react'
import { Link } from 'gatsby'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import { animated, config, useSpring } from 'react-spring'

const StyledHeader = styled(animated.header)`
  background: white;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 80;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  ${fluidRange(
    {
      prop: 'height',
      fromSize: '55px',
      toSize: '75px'
    },
    '400px',
    '1000px'
  )}
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.h2`
  margin: -5px 0 0;
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '18px',
      toSize: '23px'
    },
    '400px',
    '1000px'
  )}

  a {
    border-bottom: none;

    &:hover {
      font-style: normal;
      color: inherit;
    }
  }
`

const Header = () => {
  const headerProps = useSpring({
    config: config.slow,
    from: {
      opacity: 0,
      top: '-80px'
    },
    opacity: 1,
    top: '0px',
    delay: 250
  })

  return (
    <StyledHeader style={headerProps}>
      <MenuButton />
      <LogoContainer>
        <Logo>
          <Link to="/">James &amp; Sophie</Link>
        </Logo>
      </LogoContainer>
      <Menu />
    </StyledHeader>
  )
}

export default Header
