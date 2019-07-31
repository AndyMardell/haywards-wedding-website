import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import Fade from '../transitions/fade'
import Context from '../context'

const Menu = () => {
  const [context, setContext] = useContext(Context)
  const showClass = context.showMenu ? 'menu--shown' : ''
  const hideMenu = (e) => setContext({ ...context, showMenu: false })

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: context.showMenu && 'body--no-overflow'
        }}
      />
      <nav
        className={`menu  ${showClass}`}
        style={{ display: context.showMenu && 'flex' }}
      >
        <ul>
          <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
          <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
          <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
          <li><Fade to='/' onClick={hideMenu}>Some</Fade></li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
