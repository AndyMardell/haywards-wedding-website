import React from 'react'
import { Link } from 'gatsby'
import MenuButton from './menuButton'
import Menu from '../components/menu'

const Header = () => (
  <>
    <header className='header'>
      <MenuButton />
      <div className='[ u-flex  u-flex--align-center  u-flex--justyify-center ]'>
        <h2 className='header__logo'>
          <Link to="/">James &amp; Sophie</Link>
        </h2>
      </div>
      <Menu />
    </header>
  </>
)

export default Header
