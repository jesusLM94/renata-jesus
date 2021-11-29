import React, { Fragment } from 'react'
import { guestList } from '../../helpers/guestList'
import invitationBg from '../../assets/images/invitation-bg.jpeg'

const Invitation = (props) => {
  const { inviteId } = props
  const person = guestList[inviteId]

  return (
    <Fragment>
      {person ? (
        <div className="w-full relative h-64">
          <div className="w-full h-full bg-black top-0 left-0 absolute opacity-10" />
          <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
            <h3 className="heading-text mt-10">Datos del invitado</h3>
            <p className="text-2xl sm:text-4xl text-center mt-5 sm:mt-10">{person.name}</p>
            <p className="text-lg sm:text-2xl mt-3">{person.tickets} boletos</p>
            <p className="text-lg sm:text-2xl mt-3 mb-5">No Niños</p>
          </div>
          <img className="object-cover w-full h-full" src={invitationBg} alt="wedding" />
        </div>
      ) : null}
    </Fragment>
  )
}

export default Invitation
