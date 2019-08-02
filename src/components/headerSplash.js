import React, { useState, useEffect } from 'react'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import Scroll from '../components/scroll'
import Image from '../components/image'
import posed from 'react-pose'

const Title = posed.h1({
  visible: {
    y: 0,
    opacity: 1,
    delay: 400
  },
  hidden: {
    y: 20,
    opacity: 0
  }
})

const Subtitle = posed.h2({
  visible: {
    y: 0,
    opacity: 1,
    delay: 500
  },
  hidden: {
    y: 20,
    opacity: 0
  }
})

const Splash = () => {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])

  return (
    <>
      <div className='header-splash'>
        <div className='u-align--center'>
          <Title pose={show ? 'visible' : 'hidden'}>James & Sophie</Title>
          <Subtitle pose={show ? 'visible' : 'hidden'}>We&apos;re getting married</Subtitle>
        </div>
        <Scroll show={show} />
        <Image file='rose' className='header-splash__background' absolute />
      </div>
      <MenuButton fixed />
      <Menu />
    </>
  )
}

export default Splash
