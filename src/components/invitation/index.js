import React, { Fragment } from 'react'
import { guestList } from '../../helpers/guestList'
import './index.scss'

const Invitation = (props) => {
  const { inviteId } = props
  const person = guestList[inviteId]

  return (
    <Fragment>
      {person ? (
        <div className="flex justify-center items-center flex-col invite-texture w-full relative">
          <h3 className="heading-text mt-10">Datos del invitado</h3>
          <p className="text-2xl sm:text-4xl text-center mt-5 sm:mt-10">{person.name}</p>
          <p className="text-lg sm:text-2xl mt-3">{person.tickets} boletos</p>
          <p className="text-lg sm:text-2xl mt-3 mb-5">No Niños</p>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Invitation
