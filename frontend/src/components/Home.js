import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from 'components/NavBar'

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
      <h1>Hello {username}!</h1>
      <button id='level100' onClick={() => postLevel(100)}>
        100%
      </button>
      <button id='level75' onClick={() => postLevel(75)}>
        75%
      </button>
      <button id='level50' onClick={() => postLevel(50)}>
        50%
      </button>
      <button id='level25' onClick={() => postLevel(25)}>
        25%
      </button>
      <NavBar />
    </div>
  )
}
