import React from 'react'
import HamburgerMenu from './hamburgerMenu'
import Navigation from './navigation'
import './index.scss'

const Header = () => {
  return (
    <div className="fixed-header">
      <h1 className="header-title">Renata & Jesús</h1>
      <Navigation className="hidden sm:flex" />
      <HamburgerMenu />
    </div>
  )
}

export default Header
