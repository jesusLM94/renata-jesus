import React from 'react'

const Navigation = (props) => {
  const { className, isOpen } = props
  return (
    <div className={className}>
      <nav className="navbar-nav flex flex-col sm:flex-row">
        <a className="md:px-5" href="#home">
          Inicio
        </a>
        <a className="md:px-5" href="#when-and-where">
          ¿Dónde y Cúando?
        </a>
        <a className="md:px-5" href="#gift-table">
          Mesa de Regalos
        </a>
        <a className="md:px-5" href="#confirmation">
          Confirmar Asistencia
        </a>
      </nav>
    </div>
  )
}

export default Navigation
