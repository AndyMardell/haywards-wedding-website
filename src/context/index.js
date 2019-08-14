import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const defaultContextValue = { showMenu: false }
const Context = createContext(defaultContextValue)

const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(defaultContextValue)

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
}

export { Context as default, ContextProvider }
