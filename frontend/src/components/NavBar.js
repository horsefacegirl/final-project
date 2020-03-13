import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

const handleLogOut = () => {
  window.localStorage.removeItem('accessToken')
}

export const Navbar = () => (
  <Menu right>
    <Link to="/home">Home</Link>
    <Link to="/stats">Statistics</Link>
    <Link to="/tips">Tips</Link>
    <Link to="/" onClick={() => handleLogOut()}>Log out</Link>
  </Menu>
)