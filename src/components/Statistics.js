import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Calendar from 'react-calendar'
import { H1, FlexColumn, Dot25, Dot50, Dot75, Dot100 } from '../styles'

const colors = {
  25: '#654f6f',
  50: '#7576a5',
  75: '#7ea16b',
  100: '#eac419'
}

export const Statistics = () => {
  const accessToken = window.localStorage.getItem('accessToken')
  const history = useHistory()

  const handleSetLevels = (levels) => {
    setTimeout(() => {
      levels.forEach((level) => {
        const date = new Date(level.date)
        const formatDate = date.toLocaleDateString('sv-SE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
        // Select date by aria-label (unique)
        const selectedDate = document.querySelector(
          `[aria-label="${formatDate}"]`
        )
        if (selectedDate) {
          // Set background color for different levels
          selectedDate.parentNode.style.background = colors[level.value]
          selectedDate.style.color = 'white'
        }
      })
    }, 100)
  }

  useEffect(() => {
    if (!accessToken) {
      return
    }

    fetch('https://energy-wise.herokuapp.com/levels', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((res) => res.json())
      .then((json) => {
        // handle response in handleSetLevels (not saving)
        handleSetLevels(json)
        const arrows = Array.from(
          document.getElementsByClassName('react-calendar__navigation__arrow')
        )
        // addEventListener runs handleSetLevels again when clicking on either of these buttons.
        arrows.forEach((element) => element.addEventListener('click', () => handleSetLevels(json)))
      })

    // Clean up listeners
    return () => {
      const arrows = Array.from(
        document.getElementsByClassName('react-calendar__navigation__arrow')
      )
      arrows.forEach((element) => element.removeEventListener('click', () => handleSetLevels()))
    }
  }, [])

  if (!accessToken) {
    history.push('/')
    return null
  }

  return (
    <div>
      <FlexColumn>
        <H1>Statistics</H1>
        <Calendar />
        <div>
          <Dot25>25%</Dot25>
          <Dot50>50%</Dot50>
          <Dot75>75%</Dot75>
          <Dot100>100%</Dot100>
        </div>
      </FlexColumn>
    </div>
  )
}
