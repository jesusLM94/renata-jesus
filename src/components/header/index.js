import React, { useState } from 'react'
import HamburgerMenu from './hamburgerMenu'
import Navigation from './navigation'
import './index.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed-header flex items-center py-7 flex-col px-10 sm:px-0">
      <div className="flex w-full justify-between sm:justify-center">
        <h1 className="header-title text-5xl sm:text-7xl mb-7">Renata & Jesús</h1>
        <HamburgerMenu isOpen={isOpen} onButtonClick={toggleMenu} />
      </div>
      <Navigation className="sm:flex hidden text-xl" />
      {isOpen ? <Navigation className="sm:hidden flex text-lg" /> : null}
    </div>
  )
}

export default Header
