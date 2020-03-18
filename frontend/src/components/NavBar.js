import React from 'react'
import { StyledLink } from '../styles'
import { slide as Menu } from 'react-burger-menu'
import useWindowSize from '../useWindowSize'

const handleLogOut = () => {
  window.localStorage.removeItem('accessToken')
}

export const Navbar = () => {
  const window = useWindowSize()
  console.log(window)
  return (
    <Menu right width={window.width < 400 ? '100%' : window.width < 800 ? '40%' : '25%'}>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/stats">Statistics</StyledLink>
      <StyledLink to="/tips">Tips</StyledLink>
      <StyledLink to="/" onClick={() => handleLogOut()}>Log out</StyledLink>
    </Menu>
  )
}

