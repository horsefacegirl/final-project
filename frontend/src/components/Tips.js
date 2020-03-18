import React from 'react'
import { useHistory } from 'react-router-dom'
import { tips } from '../FeelGoodData'

export const Tips = () => {
  const history = useHistory()
  const accessToken = window.localStorage.getItem('accessToken')
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
      <h1>{levelValue}%</h1>
      <p>Always listen to your body... or</p>
      <h2>{getRandomTips}</h2>
    </div>
  )
}
