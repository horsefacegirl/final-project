import React, { useEffect } from 'react'
import Calendar from 'react-calendar'
import { H1, FlexColumn, Dot25, Dot50, Dot75, Dot100 } from '../styles'

const colors = {
  25: '#654f6f',
  50: '#7576a5',
  75: '#7ea16b',
  100: '#eac419'
}

export const Statistics = () => {
  const handleSetLevels = (levels) => {
    setTimeout(() => {
      levels.forEach((level) => {
        const date = new Date(level.date)
        const formatDate = date.toLocaleDateString('sv-SE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
        //Select date by aria-label (unique)
        const selectedDate = document.querySelector(
          `[aria-label="${formatDate}"]`
        )
        if (selectedDate) {
          // selectedDate.parentNode.classList.add('styledDate')
          //Set background color for different levels
          selectedDate.parentNode.style.background = colors[level.value]
          selectedDate.style.color = 'white'
        }
      })
    }, 100)
  }

  useEffect(() => {
    fetch('http://localhost:8080/levels', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('accessToken')
      }
    })
      .then((res) => res.json())
      .then((json) => {
        //handle response in handleSetLevels (not saving)
        handleSetLevels(json)
        const arrows = Array.from(
          document.getElementsByClassName('react-calendar__navigation__arrow')
        )
        //addEventListener runs handleSetLevels again when clicking on either of these buttons.
        //No need for useState
        arrows.forEach((element) =>
          element.addEventListener('click', () => handleSetLevels(json))
        )
      })

    //Clean up listeners
    return () => {
      const arrows = Array.from(
        document.getElementsByClassName('react-calendar__navigation__arrow')
      )
      arrows.forEach((element) =>
        element.removeEventListener('click', () => handleSetLevels())
      )
    }
  }, [])

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
