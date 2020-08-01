import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage'
import { UserContext } from './UserContext'

export default () => {

  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to='/dashboard'/> : <LandingPage />}
        </Route>
        <Route path="/home" render={() => <LandingPage />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        {
          user ?
            <Route render={() => <Redirect to="/dashboard" />} /> :
            <Route render={() => <Redirect to="/" />} />
        }
      </Switch>
    </UserContext.Provider>
  )
}
