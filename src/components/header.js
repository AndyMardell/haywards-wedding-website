import React, { useContext } from 'react'
import Fade from '../transitions/fade'
import Context from '../context'
import Menu from './menu'

const Header = () => {
  const [context, setContext] = useContext(Context)

  const toggleMenu = (e) => {
    e && e.preventDefault()
    setContext({
      ...context,
      showMenu: !context.showMenu
    })
  }

  return (
    <>
      <header className='header'>
        <a href='#' className='header__menu' onClick={toggleMenu}>
          {context.showMenu ? 'Close' : 'Menu'}
        </a>
        <div>
          <h2 className='header__logo'>
            <Fade to="/">James &amp; Sophie</Fade>
          </h2>
        </div>
      </header>
      {context.showMenu &&
        <Menu />
      }
    </>
  )
}

export default Header
