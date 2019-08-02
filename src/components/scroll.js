import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

const ScrollContainer = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    delay: 2000,
    transition: {
      y: { type: 'spring', stiffness: 200, damping: 15 },
      default: { duration: 300 }
    }
  },
  hidden: {
    y: 20,
    opacity: 0
  }
})

const Scroll = ({ show }) => (
  <ScrollContainer pose={show ? 'visible' : 'hidden'} className='scroll'>
    Scroll
  </ScrollContainer>
)

Scroll.propTypes = {
  show: PropTypes.bool
}

export default Scroll
