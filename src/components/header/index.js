import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <div className="fixed-header">
      <h1 className="header-title">Renata & Jesús</h1>
      <div className="flex">
        <nav className="navbar-nav">
          <a href="#">Inicio</a>
          <a href="#">¿Dónde y Cúando?</a>
          <a href="#">Mesa de Regalos</a>
          <a href="#">Confirmar Asistencia</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
