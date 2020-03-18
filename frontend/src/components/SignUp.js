import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Form,
  InputField,
  Input,
  Label,
  StyledLink
} from '../styles'

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
      <Form onSubmit={handleSignUp}>
        <InputField>
          <Label htmlFor='username'>USERNAME</Label>
          <Input
            id='username'
            type='text'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}></Input>
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
        <Button type='submit'>Sign up</Button>
      </Form>
      <StyledLink to='/login'>Already a user? Sign in here</StyledLink>
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  )
}
