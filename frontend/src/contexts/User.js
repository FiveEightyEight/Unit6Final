import React, { createContext } from 'react'

export const userContext = createContext(null)

export const { Provider, Consumer } = userContext;

export const withContext = Component => props => (
  <Consumer>
    {value =>
      <Component {...value} {...props} />
    }
  </Consumer>
);