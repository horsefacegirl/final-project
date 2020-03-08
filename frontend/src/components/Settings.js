import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Button } from '../styles'

export const Settings = () => {
  const history = useHistory()
  //LOG OUT
  const handleLogOut = () => {
    window.localStorage.removeItem('accessToken')
    history.push('/')
  }
  return (
    <div>
      <p>Settings</p>
      <Button onClick={() => handleLogOut()}>Log out</Button>
      <NavBar />
    </div>
  )
}
