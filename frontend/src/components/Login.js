import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import logo2 from '../images/logo2.png'
import { Header, Logo, Button, Form } from '../styles'

export const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    fetch('http://localhost:8080/sessions', {
      method: 'POST',
      body: JSON.stringify({
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
          window.localStorage.setItem('accessToken', user.accessToken)
          window.localStorage.setItem('username', user.username)
          history.push('/home')
        } else {
          setErrorMessage(user.message)
        }
      })
  }

  return (
    <div>
      <Header>
        <Logo src={logo2} alt='logo' />
      </Header>
      <Form onSubmit={handleLogin}>
        <label htmlFor='email'>E-mail</label>
        <input
          id='email'
          type='email'
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}></input>
        <Button type='submit'>Login</Button>
      </Form>
      <Link to='/signup'>No account? Create one here</Link>
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  )
}
