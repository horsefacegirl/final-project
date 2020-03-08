import React from 'react'
import { useHistory } from 'react-router-dom'
import logo2 from '../images/logo2.png'
import { Header, Logo, Button, AppInfo } from '../styles'

export const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <Header>
        <Logo src={logo2} alt='logo' />
      </Header>
      <Button onClick={() => history.push('/login')}>Login</Button>
      <Button onClick={() => history.push('/signup')}>Sign up</Button>
      <AppInfo>
        <h2>Info about app</h2>
        <p>Track your energy level</p>
        <p>Get healty suggestions</p>
        <p>Find your pattern</p>
      </AppInfo>
    </div>
  )
}
