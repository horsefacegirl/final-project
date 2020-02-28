import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const Secret = () => {
  const [message, setMessage] = useState()
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

  return <div>{message}</div>
}
