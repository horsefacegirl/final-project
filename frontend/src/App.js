import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing } from './components/Landing'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Secret } from './components/Secret'
import { Statistics } from './components/Statistics'
import { Settings } from './components/Settings'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/secrets'>
          <Secret />
        </Route>
        <Route path='/stats'>
          <Statistics />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
