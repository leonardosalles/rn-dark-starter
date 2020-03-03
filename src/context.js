import React from 'react'
import { displayName as appName } from '../app.json'

const AppContext = React.createContext({
  appName
})

export const AppContextProvider = AppContext.Provider

export const AppContextConsumer = AppContext.Consumer

export const withAppContext = Component => props => (
  <AppContextConsumer>{state => <Component {...props} context={state} /> }</AppContextConsumer>
)