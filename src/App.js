import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import { UserContext } from './UserContext'

export default () => {

  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </UserContext.Provider>
  )
}
