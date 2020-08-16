import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage'
import { UserContext } from './UserContext'
import Init from './views/Components/Auth/Init'

export default () => {

  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Init />
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to='/dashboard'/> : <LandingPage />}
        </Route>
        <Route path="/home" render={() => <LandingPage />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        {
          user ?
            <Route render={() => <Redirect to="/dashboard" />} /> :
            <Route render={() => <Redirect to="/home" />} />
        }
      </Switch>
    </UserContext.Provider>
  )
}
