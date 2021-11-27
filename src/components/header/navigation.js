import React from 'react'

const Navigation = (props) => {
  const { className } = props
  return (
    <div className={className}>
      <nav className="navbar-nav">
        <a href="#home">Inicio</a>
        <a href="#when-and-where">¿Dónde y Cúando?</a>
        <a href="#gift-table">Mesa de Regalos</a>
        <a href="#confirmation">Confirmar Asistencia</a>
      </nav>
    </div>
  )
}

export default Navigation
