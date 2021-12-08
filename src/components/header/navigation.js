import React, { useContext } from 'react'
import { InvitationContext } from '../../contexts/invitation'

const Navigation = (props) => {
  const { className } = props
  const { hasInvitation } = useContext(InvitationContext)

  const executeScroll = (e, id) => {
    const element = document.getElementById(id)
    e.preventDefault()
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={className}>
      <nav className="navbar-nav flex flex-col sm:flex-row">
        <a onClick={(e) => executeScroll(e, 'home')} className="sm:px-5" href="/">
          Inicio
        </a>
        <a onClick={(e) => executeScroll(e, 'when-and-where')} className="sm:px-5" href="/">
          ¿Dónde y Cúando?
        </a>
        <a onClick={(e) => executeScroll(e, 'gift-table')} className="sm:px-5" href="/">
          Mesa de Regalos
        </a>
        {hasInvitation ? (
          <a onClick={(e) => executeScroll(e, 'confirmation')} className="sm:px-5" href="/">
            Confirmar Asistencia
          </a>
        ) : null}
      </nav>
    </div>
  )
}

export default Navigation
