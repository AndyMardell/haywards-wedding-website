import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const defaultContextValue = {
  showMenu: false,
  location: { pathname: '/' }
}

const Context = createContext(defaultContextValue)

const ContextProvider = ({ children, location }) => {
  const [context, setContext] = useState(defaultContextValue)

  useEffect(() => setContext({ ...context, location }), [])
  useEffect(() => {
    setContext({
      ...context,
      showMenu: false,
      location
    })
  }, [location])

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
