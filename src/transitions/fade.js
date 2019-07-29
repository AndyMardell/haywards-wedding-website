import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import { TimelineMax } from 'gsap'
import PropTypes from 'prop-types'

const fade = ({ exit: { length }, node, direction }) => {
  const duration = direction === 'out' ? length + length / 4 : length
  const opacity = direction === 'in' ? 1 : 0
  const scrollTop =
    (document.scrollingElement && document.scrollingElement.scrollTop) ||
    document.body.scrollTop ||
    window.pageYOffset

  const holdPosition =
    direction === 'out'
      ? {
        overflowY: 'hidden',
        height: '100vh',
        scrollTop: scrollTop
      }
      : {}

  return new TimelineMax()
    .set(node, holdPosition)
    .fromTo(node, duration, { opacity: !opacity }, { opacity: opacity })
}

const Fade = ({
  exit,
  entry,
  duration,
  ...props
}) => {
  const length = duration || 0.25

  return (
    <TransitionLink
      exit={{
        length: length,
        trigger: ({ exit, node }) => {
          fade({ exit, node, direction: 'out' })
        }
      }}
      entry={{
        length: 0,
        trigger: ({ exit, node }) => fade({ exit, node, direction: 'in' })
      }}
      {...props}
    >
      {props.children}
    </TransitionLink>
  )
}

Fade.propTypes = {
  exit: PropTypes.object,
  entry: PropTypes.object,
  duration: PropTypes.number,
  children: PropTypes.node
}

export default Fade
