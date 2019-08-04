import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuButton from './menuButton'
import Menu from '../components/menu'

const Header = ({ menu }) => (
  <>
    <header className='header'>
      {menu !== false &&
        <MenuButton />
      }
      <div className='[ u-flex  u-flex--align-center  u-flex--justyify-center ]'>
        <h2 className='header__logo'>
          <Link to="/">James &amp; Sophie</Link>
        </h2>
      </div>
      {menu !== false &&
        <Menu />
      }
    </header>
  </>
)

Header.propTypes = {
  menu: PropTypes.bool
}

export default Header
