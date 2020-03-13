import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import Calendar from 'react-calendar'

const colors = {
  25: "#654f6f",
  50: "#7576a5",
  75: "#7ea16b",
  100: "eac419"
}

export const Statistics = () => {
  const [levels, setLevels] = useState()
  const handleSetLevels = () => {
    //Don't run code if we don't have levels
    if (!levels) return
    levels.forEach(level => {
      const date = new Date(level.date)
      const formatDate = date.toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })
      //Select date by aria-label (unique)
      const selectedDate = document.querySelector(`[aria-label="${formatDate}"]`)
      selectedDate.parentNode.classList.add('styledDate')
      //Set background color for different levels
      selectedDate.parentNode.style.background = colors[level.value]
    })
  }
  //Triggers when levels change (useState)
  useEffect(() => {
    handleSetLevels()
  }, [levels])

  useEffect(() => {
    fetch("http://localhost:8080/levels", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('accessToken')
      }
    })
      .then(res => res.json())
      .then(json => {
        //Saving levels in state
        setLevels(json)
      })
  }, [])
  const handleOnViewChange = () => {
    console.log(levels)
    if (levels) {
      handleSetLevels()
    }
  }

  return (
    <div>
      <p>Statistics</p>
      <Calendar onViewChange={() => handleOnViewChange()} />
      <NavBar />
    </div>
  )
}
