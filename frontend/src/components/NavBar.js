import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const NavBar = () => {
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.push('/secrets')}>Home</button>
      <button onClick={() => history.push('/stats')}>Stats</button>
      <button onClick={() => history.push('/settings')}>Settings</button>
    </div>
  )
}
