import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

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

  const toggleClass = context.showMenu ? 'menu-button--open' : ''

  return (
    <a href='#' className={`${buttonClass} ${toggleClass}`} onClick={toggleMenu}>
      <div className='menu-button__burger'>
        <span />
        <span />
        <span />
      </div>
      {context.showMenu ? 'Close' : 'Menu'}
    </a>
  )
}

MenuButton.propTypes = {
  fixed: PropTypes.boolean
}

export default MenuButton
