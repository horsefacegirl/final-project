import React from 'react'
import { useHistory } from 'react-router-dom'
import { tips } from '../FeelGoodData'
import { FlexColumn, H1, Button } from 'styles'

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
    <>
      <FlexColumn>
        <H1>{levelValue}%</H1>
        <p>Always listen to your body... or</p>
        <h2>{getRandomTips}</h2>
        <Button onClick={() => history.push('/stats')}>See your pattern</Button>
      </FlexColumn>
    </>
  )
}
