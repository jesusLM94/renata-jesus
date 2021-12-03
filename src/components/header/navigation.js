import React from 'react'

const Navigation = (props) => {
  const { className } = props

  const executeScroll = (e, id) => {
    const element = document.getElementById(id);
    e.preventDefault();
    element?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={className}>
      <nav className="navbar-nav flex flex-col sm:flex-row">
        <a onClick={(e) => executeScroll(e,'home')} className="md:px-5" href="/">
          Inicio
        </a>
        <a onClick={(e) => executeScroll(e,'when-and-where')} className="md:px-5" href="/">
          ¿Dónde y Cúando?
        </a>
        <a onClick={(e) => executeScroll(e,'gift-table')} className="md:px-5" href="/">
          Mesa de Regalos
        </a>
        <a onClick={(e) => executeScroll(e,'confirmation')} className="md:px-5" href="/">
          Confirmar Asistencia
        </a>
      </nav>
    </div>
  )
}

export default Navigation
