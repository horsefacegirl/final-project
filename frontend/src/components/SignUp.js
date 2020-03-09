import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import logo2 from '../images/logo2.png'
import { Header, Logo, Button, Form } from '../styles'

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
        username: username,
        email: email,
        password: password
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

      <Form onSubmit={handleSignUp}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}></input>
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
        <Button type='submit'>Sign up</Button>
      </Form>
      <Link to='/login'>Already a user? Sign in here</Link>
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  )
}
