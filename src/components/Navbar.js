import React, { useState } from 'react'
import { StyledLink } from '../styles'
import { slide as Menu } from 'react-burger-menu'
import useWindowSize from '../useWindowSize'
import hamburger from '../images/hamburger.png'
import cross from '../images/cross.png'

const handleLogOut = () => {
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('username')
  window.localStorage.removeItem('levelValue')
}

export const Navbar = () => {
  const window = useWindowSize()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Menu
      isOpen={menuIsOpen}
      onStateChange={(state) => setMenuIsOpen(state.isOpen)}
      customBurgerIcon={<img src={hamburger} alt='menu' />}
      customCrossIcon={<img src={cross} alt='exit menu' />}
      right
      width={window.width < 600 ? '100%' : '30%'}>
      <StyledLink to='/home' onClick={() => setMenuIsOpen(false)}>
        Home
      </StyledLink>
      <StyledLink to='/stats' onClick={() => setMenuIsOpen(false)}>
        Statistics
      </StyledLink>
      <StyledLink to='/tips' onClick={() => setMenuIsOpen(false)}>
        Tips
      </StyledLink>
      <StyledLink to='/' onClick={() => handleLogOut()}>
        Log out
      </StyledLink>
    </Menu>
  )
}
