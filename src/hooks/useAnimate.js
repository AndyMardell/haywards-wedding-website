import { useEffect, useState } from 'react'
import { config as springConfig, useSpring } from 'react-spring'

const useAnimate = (props = {}) => {
  const [finished, setFinished] = useState(false)

  const trigger = typeof props.trigger !== 'undefined' ? props.trigger : true
  const once = typeof props.once !== 'undefined' ? props.once : true
  const defaultConfig = {
    config: springConfig.molasses,
    from: {
      opacity: 0,
      transform: 'translateY(30px)'
    },
    opacity: trigger || finished ? 1 : 0,
    transform: trigger || finished ? 'translateY(0)' : 'translateY(30px)'
  }

  useEffect(() => {
    if (trigger && once) setFinished(true)
  }, [trigger])

  const spring = (delay = 0) =>
    useSpring({
      ...(props.config || defaultConfig),
      delay
    })

  return spring
}

export default useAnimate
