import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const MenuButton = ({ fixed }) => {
  const [context, setContext] = useContext(Context)
  const buttonClass = fixed ? 'menu-button  menu-button--fixed' : 'menu-button'
  const toggleClass = context.showMenu ? 'menu-button--open' : ''
  const toggleMenu = () => setContext({ ...context, showMenu: !context.showMenu })

  return (
    <button className={`${buttonClass} ${toggleClass}`} onClick={toggleMenu}>
      <div className='menu-button__burger'>
        <span />
        <span />
        <span />
      </div>
      <span>{context.showMenu ? 'Close' : 'Menu'}</span>
    </button>
  )
}

MenuButton.propTypes = {
  fixed: PropTypes.bool
}

export default MenuButton
