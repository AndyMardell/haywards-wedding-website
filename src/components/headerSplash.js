import React from 'react'
import PropTypes from 'prop-types'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import Scroll from '../components/scroll'

const Splash = ({ children }) => (
  <>
    <div className='header-splash'>
      <div className='u-align--center'>
        <h1>James & Sophie</h1>
        <h2>We&apos;re getting married</h2>
      </div>
      <Scroll />
    </div>
    <MenuButton fixed />
    <Menu />
  </>
)

Splash.propTypes = {
  children: PropTypes.node.isRequired
}

export default Splash
