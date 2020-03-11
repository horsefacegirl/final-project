import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from 'components/NavBar'
import logo2 from '../images/logo2.png'
import {
  Header,
  Logo,
  Levels,
  Button100,
  Button75,
  Button50,
  Button25
} from '../styles'

export const Home = () => {
  const history = useHistory()
  const accessToken = window.localStorage.getItem('accessToken')
  const username = window.localStorage.getItem('username')

  const postLevel = (level) => {
    fetch('http://localhost:8080/levels', {
      method: 'POST',
      body: JSON.stringify({ value: level, date: new Date() }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res._id) {
          history.push('/stats')
        }
      })
  }

  if (!accessToken) {
    history.push('/')
    return null
  }

  return (
    <div>
      <Header>
        <Logo src={logo2} alt='logo' />
      </Header>
      <h1>Hello {username}!</h1>
      <p>Choose your energy level</p>
      <Levels>
        <Button100 id='level100' onClick={() => postLevel(100)}>
          100%
        </Button100>
        <Button75 id='level75' onClick={() => postLevel(75)}>
          75%
        </Button75>
        <Button50 id='level50' onClick={() => postLevel(50)}>
          50%
        </Button50>
        <Button25 id='level25' onClick={() => postLevel(25)}>
          25%
        </Button25>
      </Levels>
      <NavBar />
    </div>
  )
}

// Naming of buttons?
// Range slider?
