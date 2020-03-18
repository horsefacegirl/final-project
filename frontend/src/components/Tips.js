import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { tips } from '../FeelGoodData'
import logo2 from '../images/logo2.png'
import { Header, Logo } from '../styles'

export const Tips = () => {
  const history = useHistory()
  const accessToken = window.localStorage.getItem('accessToken')
  const username = window.localStorage.getItem('username')
  const levelValue = window.localStorage.getItem('levelValue')
  const getRandomTips =
    tips[`tips${levelValue}`][
      Math.floor(Math.random() * tips[`tips${levelValue}`].length)
    ]

  if (!accessToken) {
    history.push('/')
    return null
  }

  return (
    <div>
      <Header>
        <Logo src={logo2} alt='logo' />
      </Header>
      {/* <h1>{username}</h1> */}
      <h1>{levelValue}%</h1>
      <p>Always listen to your body... or</p>
      <h2>{getRandomTips}</h2>
    </div>
  )
}
