import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Button, H1 } from '../styles'

export const Settings = () => {
  const history = useHistory()
  //LOG OUT
  const handleLogOut = () => {
    window.localStorage.removeItem('accessToken')
    history.push('/')
  }
  return (
    <div>
      <H1>Settings</H1>
      <Button onClick={() => handleLogOut()}>Log out</Button>
      <NavBar />
    </div>
  )
}
