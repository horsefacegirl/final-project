import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Landing } from './components/Landing'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Statistics } from './components/Statistics'
import { Tips } from './components/Tips'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Landing />
        </Route>
        <Route path='/signup'>
          <Header />
          <SignUp />
        </Route>
        <Route path='/login'>
          <Header />
          <Login />
        </Route>
        <Route path='/home'>
          <Header />
          <Navbar />
          <Home />
        </Route>
        <Route path='/tips'>
          <Header />
          <Navbar />
          <Tips />
        </Route>cd
        <Route path='/stats'>
          <Header />
          <Navbar />
          <Statistics />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
