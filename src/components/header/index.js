import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <div className="fixed-header">
      <h1 className="header-title">Renata & Jesús</h1>
      <div className="flex">
        <nav className="navbar-nav">
          <a href="#heroImage">Inicio</a>
          <a href="#whenAndWhere">¿Dónde y Cúando?</a>
          <a href="#gifts">Mesa de Regalos</a>
          <a href="#im-going">Confirmar Asistencia</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
