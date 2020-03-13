import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing } from './components/Landing'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Statistics } from './components/Statistics'
import { Settings } from './components/Settings'
import { Tips } from './components/Tips'

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
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/tips'>
          <Tips />
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
