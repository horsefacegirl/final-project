import React from 'react'
import { useHistory } from 'react-router-dom'
import logo2 from '../images/logo2.png'
import { Header, Logo, Button, AppInfo, FlexColumn } from '../styles'

export const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <Header>
        <Logo src={logo2} alt='logo' />
      </Header>
      <AppInfo>
        <p>TRACK YOUR ENERGY LEVEL</p>
        <p>GET HEALTHY SUGGESTIONS</p>
        <p>FIND YOUR PATTERN</p>
      </AppInfo>
      <FlexColumn>
        <Button primary onClick={() => history.push('/login')}>
          Login
        </Button>
        <Button onClick={() => history.push('/signup')}>Sign up</Button>
      </FlexColumn>
    </div>
  )
}
