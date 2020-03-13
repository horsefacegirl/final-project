import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Landing } from './components/Landing'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Statistics } from './components/Statistics'
import { Tips } from './components/Tips'
import { Navbar } from './components/Navbar'

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
          <Navbar />
          <Home />
        </Route>
        <Route path='/tips'>
          <Navbar />
          <Tips />
        </Route>
        <Route path='/stats'>
          <Navbar />
          <Statistics />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
