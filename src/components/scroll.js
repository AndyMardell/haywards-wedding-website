import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring, config } from 'react-spring'

const Scroll = ({ show }) => {
  const props = useSpring({
    delay: 2000,
    config: config.gentle,
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: show ? 1 : 0, transform: 'translateY(0)' }
  })

  return (
    <>
    {show &&
      <animated.div style={props} className='scroll'>
        Scroll
      </animated.div>
    }
    </>
  )
}

Scroll.propTypes = {
  show: PropTypes.bool
}

export default Scroll
