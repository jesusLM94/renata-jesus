import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <div className="fixed-header">
      <h1>Renata & Jesús</h1>
      <div className="container">
        <nav className="navbar-nav">
          <a href="#">Inicio</a>
          <a href="#">¿Dónde y Cúando?</a>
          <a href="#">Damas de Honor & Padrinos</a>
          <a href="#">Confirmar Asistencia</a>
          <a href="#">Fotos</a>
          <a href="#">Mesa de Regalos</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
