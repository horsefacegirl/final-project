import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from 'components/NavBar'
import { tips25, tips50, tips75, tips100 } from '../FeelGoodData'
import logo2 from '../images/logo2.png'
import {
  Header,
  Logo
} from '../styles'

export const Tips = () => {
  const history = useHistory()
  const accessToken = window.localStorage.getItem('accessToken')
  const username = window.localStorage.getItem('username')
  const levelValue = window.localStorage.getItem('levelValue')
  const getRandomTips = tips100[
    Math.floor(Math.random() * tips100.length)
  ]

  if (!accessToken) {
    history.push('/')
    return null
  }

  //How can we get the selected level?? localStorage? 
  //If level ex 25, how to get tips25?
  return (
    <div>
      <Header>
        <Logo src={logo2} alt='logo' />
      </Header>
      <h1>{username}</h1>
      <h1>{levelValue}%</h1>
      <p>Always listen to your body... or</p>
      <h2>{getRandomTips}</h2>
      <NavBar />
    </div>
  )
}