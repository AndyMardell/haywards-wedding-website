import React, { useContext, useRef } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Context from '../context'
import { animated, useTransition, useSpring, useChain, config } from 'react-spring'

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
    to: { width: context.showMenu ? '100%' : '0%' }
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
      <animated.nav className='menu' style={springProps}>
        <ul>
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
        </ul>
      </animated.nav>
    </>
  )
}

export default Menu
