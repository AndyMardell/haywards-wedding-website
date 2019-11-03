import { config } from 'react-spring'

const fadeInUp = {
  config: config.molasses,
  from: {
    opacity: 0,
    transform: 'translateY(30px)'
  },
  opacity: 1,
  transform: 'translateY(0)'
}

export default fadeInUp
