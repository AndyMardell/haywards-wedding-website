import React from 'react'
import { Link } from 'gatsby'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledHeader = styled.header`
  background: white;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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

  h2 {
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
      }
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => (
  <StyledHeader>
    <MenuButton />
    <Logo>
      <h2>
        <Link to="/">James &amp; Sophie</Link>
      </h2>
    </Logo>
    <Menu />
  </StyledHeader>
)

export default Header
