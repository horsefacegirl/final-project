import React from 'react'
import { useHistory } from 'react-router-dom'

export const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <img src='' alt='logo' />
      <button onClick={() => history.push('/login')}>Login</button>
      <button onClick={() => history.push('/signup')}>Sign up</button>
      <h1>Info about app</h1>
    </div>
  )
}
