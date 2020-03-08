import React from 'react'
import { useHistory } from 'react-router-dom'
import logo1 from '../images/logo1.png'
import { Header, Logo, Button } from '../styles'

export const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <Header>
        <Logo src={logo1} alt='logo' />
        <h1>App name</h1>
      </Header>
      <Button onClick={() => history.push('/login')}>Login</Button>
      <Button onClick={() => history.push('/signup')}>Sign up</Button>
      <h2>Info about app</h2>
      <p>First fact</p>
      <p>Second fact</p>
      <p>Third fact</p>
    </div>
  )
}
