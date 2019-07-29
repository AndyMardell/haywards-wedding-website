import React, { useContext } from 'react'
import Fade from '../transitions/fade'
import Context from '../context'

const Menu = () => {
  const [context, setContext] = useContext(Context)

  const hideMenu = (e) => {
    e && e.preventDefault()
    setContext({
      ...context,
      showMenu: false
    })
  }

  return (
    <nav className='header__nav'>
      <ul>
        <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
        <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
        <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
        <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
      </ul>
    </nav>
  )
}

export default Menu
