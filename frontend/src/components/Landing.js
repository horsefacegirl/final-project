import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, AppInfo, FlexColumn } from '../styles'

export const Landing = () => {
  const history = useHistory()
  return (
    <div>
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
