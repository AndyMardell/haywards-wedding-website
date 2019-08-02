import React, { useContext, useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import Fade from '../transitions/fade'
import Context from '../context'
import posed from 'react-pose'

const Nav = posed.nav({
  open: {
    x: '0%',
    delayChildren: 500,
    staggerChildren: 50,
    transition: {
      x: {
        type: 'tween',
        ease: 'easeIn'
      }
    }
  },
  closed: {
    x: '-100%',
    staggerChildren: 50,
    staggerDirection: -1,
    delay: 500
  }
})

const Item = posed.li({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 10,
    opacity: 0
  }
})

const Menu = () => {
  const [context, setContext] = useContext(Context)
  const [loaded, setLoaded] = useState(false)
  const showClass = context.showMenu ? 'menu--shown' : ''
  const hideMenu = (e) => setContext({ ...context, showMenu: false })

  useEffect(() => {
    context.showMenu && setLoaded(true)
  }, [context.showMenu])

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: context.showMenu && 'body--no-overflow'
        }}
      />
      <Nav
        className={`menu  ${showClass}`}
        pose={context.showMenu ? 'open' : 'closed'}
        style={{ display: loaded ? 'flex' : 'none' }}
      >
        <ul>
          <Item><Fade to='/' onClick={hideMenu}>Home</Fade></Item>
          <Item><Fade to='/wedding' onClick={hideMenu}>Wedding</Fade></Item>
          <Item><Fade to='/venue' onClick={hideMenu}>Venue &amp; Travel</Fade></Item>
          <Item><Fade to='/wedding-party' onClick={hideMenu}>Wedding Party</Fade></Item>
          <Item><Fade to='/accommodation' onClick={hideMenu}>Accommodation</Fade></Item>
        </ul>
      </Nav>
    </>
  )
}

export default Menu
