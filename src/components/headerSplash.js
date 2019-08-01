import React from 'react'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import Scroll from '../components/scroll'
import Image from '../components/image'

const Splash = () => (
  <>
    <div className='header-splash'>
      <div className='u-align--center'>
        <h1>James & Sophie</h1>
        <h2>We&apos;re getting married</h2>
      </div>
      <Scroll />
      <Image file='rose' className='header-splash__background' absolute />
    </div>
    <MenuButton fixed />
    <Menu />
  </>
)

export default Splash
