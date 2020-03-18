import React from 'react'
import { StyledLink } from '../styles'
import { slide as Menu } from 'react-burger-menu'

const handleLogOut = () => {
  window.localStorage.removeItem('accessToken')
}

export const Navbar = () => (
  <Menu right>
    <StyledLink to="/home">Home</StyledLink>
    <StyledLink to="/stats">Statistics</StyledLink>
    <StyledLink to="/tips">Tips</StyledLink>
    <StyledLink to="/" onClick={() => handleLogOut()}>Log out</StyledLink>
  </Menu>
)