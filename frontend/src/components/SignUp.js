import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

export const SignUp = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSignUp = async (event) => {
    event.preventDefault()
    fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.accessToken) {
          history.push('/login')
        } else {
          setErrorMessage(user.message)
        }
      })
  }

  return (
    <div>
      <img src='' alt='logo' />
      <h1></h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}></input>
        <label htmlFor='email'>e-mail</label>
        <input
          id='email'
          type='text'
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='text'
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}></input>
        <button type='submit'>Sign up</button>
      </form>
      <Link to='/login'>Already a user? Sign in here</Link>
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  )
}
