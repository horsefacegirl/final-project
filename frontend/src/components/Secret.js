import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from 'components/NavBar'

export const Secret = () => {
  const [message, setMessage] = useState()
  const [level, setLevel] = useState(0)
  const history = useHistory()
  const accessToken = window.localStorage.getItem('accessToken')

  useEffect(() => {
    fetch('http://localhost:8080/secrets', {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.secret)
      })
  }, [])

  const postLevelToAPI = (level) => {
    fetch('http://localhost:8080/levels', {
      method: 'POST',
      body: JSON.stringify({ level: level }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          history.push('/statistics')
        }
      })
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <button id='level100' onClick={postLevelToAPI(100)}>
        100%
      </button>
      <NavBar />
    </div>
  )
}
