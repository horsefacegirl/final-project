import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  FlexColumn,
  H1,
  Levels,
  LevelRow,
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
    fetch('https://energy-wise.herokuapp.com/levels', {
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
          window.localStorage.setItem('levelValue', level)
          history.push('/tips')
        }
      })
  }

  if (!accessToken) {
    history.push('/')
    return null
  }

  return (
    <FlexColumn>
      <H1>Hello {username}!</H1>
      <p>Choose your energy level for today</p>
      <Levels>
        <LevelRow>
          <Button25 id='level25' onClick={() => postLevel(25)}>
            25%
          </Button25>
          <Button50 id='level50' onClick={() => postLevel(50)}>
            50%
          </Button50>
        </LevelRow>
        <LevelRow>
          <Button75 id='level75' onClick={() => postLevel(75)}>
            75%
          </Button75>
          <Button100 id='level100' onClick={() => postLevel(100)}>
            100%
          </Button100>
        </LevelRow>
      </Levels>
    </FlexColumn>
  )
}
