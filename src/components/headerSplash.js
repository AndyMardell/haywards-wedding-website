import React, { useState, useEffect } from 'react'
import MenuButton from './menuButton'
import Menu from '../components/menu'
import Scroll from '../components/scroll'
import Image from '../components/image'
import { useSpring, animated, config } from 'react-spring'

const Splash = () => {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])

  const fadeInUp = {
    config: config.gentle,
    from: { opacity: 0, transform: 'translateY(30px)' },
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(30px)'
  }
  const title = useSpring({ ...fadeInUp, delay: 300 })
  const subtitle = useSpring({ ...fadeInUp, delay: 500 })

  return (
    <>
      <div className='header-splash'>
        <div className='u-align--center'>
          <animated.h1 style={title}>James & Sophie</animated.h1>
          <animated.h2 style={subtitle}>We&apos;re getting married</animated.h2>
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
