import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, InputField, Input, Label, StyledLink } from '../styles'

export const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    fetch('https://energy-wise.herokuapp.com/sessions', {
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
      <Form onSubmit={handleLogin}>
        <InputField>
          <Label htmlFor='email'>E-MAIL</Label>
          <Input
            id='email'
            type='email'
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}></Input>
          <Label htmlFor='password'>PASSWORD</Label>
          <Input
            id='password'
            type='password'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}></Input>
        </InputField>
        <Button type='submit'>Login</Button>
        <p>
          <StyledLink to='/signup'>No account? Create one here</StyledLink>
        </p>
        {errorMessage && <h2>{errorMessage}</h2>}
      </Form>
    </div>
  )
}
