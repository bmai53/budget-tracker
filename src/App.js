import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from './views/Home'
import Dashboard from './views/Dashboard'

export default () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
    </Switch>
  )
}
