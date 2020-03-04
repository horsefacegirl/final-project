import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Settings = () => {
  const history = useHistory()
  //LOG OUT
  const handleLogOut = () => {
    window.localStorage.removeItem('accessToken')
    history.push('/login')
  }
  return (
    <div>
      <p>Settings</p>
      <button onClick={() => handleLogOut()}>Log out</button>
      <NavBar />
    </div>
  )
}
