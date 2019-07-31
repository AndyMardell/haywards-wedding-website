import React, { useContext } from 'react'
import Context from '../context'
import PropTypes from 'prop-types'

const MenuButton = ({ fixed }) => {
  const [context, setContext] = useContext(Context)
  const buttonClass = fixed ? 'menu-button  menu-button--fixed' : 'menu-button'

  const toggleMenu = (e) => {
    e && e.preventDefault()
    setContext({
      ...context,
      showMenu: !context.showMenu
    })
  }

  return (
    <a href='#' className={buttonClass} onClick={toggleMenu}>
      {context.showMenu ? 'Close' : 'Menu'}
    </a>
  )
}

MenuButton.propTypes = {
  fixed: PropTypes.boolean
}

export default MenuButton
