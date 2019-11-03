import React, { useContext, useRef } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Context from '../context'
import { animated, useTransition, useSpring, useChain, config } from 'react-spring'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const Nav = styled(animated.nav)`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  line-height: 2.5;
  text-align: center;

  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '25px',
      toSize: '35px'
    },
    '400px',
    '1000px'
  )}

  ul li a {
    font-family: ${({ theme }) => theme.font.headings};
    border-bottom-width: 4px;
    font-weight: 300;

    &.current {
      font-style: italic;
    }
  }
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'The Wedding', link: '/wedding/' },
  { name: 'Venue & Travel', link: '/venue/' },
  { name: 'Wedding Party', link: '/wedding-party/' },
  { name: 'Accommodation', link: '/accommodation/' }
]

const Menu = () => {
  const [context, setContext] = useContext(Context)
  const hideMenu = () => setContext({ ...context, showMenu: false })

  const springRef = useRef()
  const springProps = useSpring({
    ref: springRef,
    config: config.default,
    from: { width: '0%' },
    width: context.showMenu ? '100%' : '0%'
  })

  const transRef = useRef()
  const transitions = useTransition(context.showMenu ? menuItems : [], item => item.name, {
    ref: transRef,
    trail: 400 / menuItems.length,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' }
  })

  useChain(context.showMenu ? [springRef, transRef] : [transRef, springRef], [0, context.showMenu ? 0.4 : 0.8])

  return (
    <>
      <Helmet bodyAttributes={{ class: context.showMenu && 'body--no-overflow' }} />
      <Nav style={springProps}>
        <List>
          {transitions.map(({ item, key, props }) => (
            <animated.li key={key} style={props} >
              <Link
                to={item.link}
                onClick={hideMenu}
                activeClassName='current'
              >
                {item.name}
              </Link>
            </animated.li>
          ))}
        </List>
      </Nav>
    </>
  )
}

export default Menu
