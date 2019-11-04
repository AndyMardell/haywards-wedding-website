import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 1.5em;
  transform: translateY(-50%);
  z-index: 1000;
  border-bottom: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  color: ${({ theme }) => theme.colors.dark};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;

  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '10px',
      toSize: '13px'
    },
    '400px',
    '1000px'
  )}

  ${({ fixed }) =>
    fixed &&
    `
    position: fixed;
    color: white;
    transform: none;
    top: 0;
    left: 0;
  `}

  ${({ fixed }) =>
    fixed &&
    fluidRange(
      {
        prop: 'margin',
        fromSize: '30px',
        toSize: '65px'
      },
      '400px',
      '1000px'
    )}

  ${({ open, theme }) =>
    open &&
    `
    color: ${theme.colors.dark};
  `}

  &:focus {
    outline: none;
  }

  &:hover {
    font-style: normal;

    ${({ open }) =>
    !open &&
      `
      & > div > span {
        width: 90%;

        &:first-child {
          width: 100%;
        }

        &:last-child {
          width: 75%;
        }
      }
    `}
  }

  @media only screen and (max-width: 600px) {
    & > span {
      display: none;
    }
  }
`

const Burger = styled.div`
  position: relative;
  width: 30px;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    width: 25px;
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 6px;
    transition: 300ms all ease;

    &:last-child {
      margin-bottom: 0;
    }

    @media only screen and (max-width: 600px) {
      margin-bottom: 4px;
    }

    ${({ open, fixed, theme }) =>
    fixed &&
      `
      display: block;
      height: 2px;
      width: 100%;
      background-color: ${open ? theme.colors.dark : 'white'};
    `}

    ${({ open, theme }) =>
    open &&
      `
      transform: translateY(50%);
      background-color: ${({ theme }) => theme.colors.dark};
      margin-bottom: -2px;

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    `}
  }
`

const MenuButton = ({ fixed }) => {
  const [context, setContext] = useContext(Context)
  const toggleMenu = () =>
    setContext({
      ...context,
      showMenu: !context.showMenu
    })

  return (
    <Button fixed={fixed} open={context.showMenu} onClick={toggleMenu}>
      <Burger fixed={fixed} open={context.showMenu}>
        <span />
        <span />
        <span />
      </Burger>
      <span>{context.showMenu ? 'Close' : 'Menu'}</span>
    </Button>
  )
}

MenuButton.propTypes = {
  fixed: PropTypes.bool
}

export default MenuButton
