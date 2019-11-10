import React, { useContext } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import Context from '../context'

const SwipeProvider = ({ children }) => {
  const { setContext } = useContext(Context)
  const showMenu = show => setContext({ showMenu: show })

  const handlers = useSwipeable({
    onSwipedRight: () => showMenu(true),
    onSwipedLeft: () => showMenu(false)
  })

  return <div {...handlers}>{children}</div>
}

SwipeProvider.propTypes = {
  children: PropTypes.node
}

export default SwipeProvider
