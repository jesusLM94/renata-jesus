import React, { Fragment, useContext } from 'react'
import { PopupButton } from '@typeform/embed-react'
import { InvitationContext } from '../../helpers/contexts'

const Confirmation = () => {
  const { hasInvitation } = useContext(InvitationContext)

  return (
    <section
      className="flex justify-center flex-col items-center mt-10 pb-10 mx-10"
      id="confirmation"
    >
      <h3 className="flex heading-text font-bold justify-center mb-5">
        Medidas de seguridad Covid-19
      </h3>
      <p className="text-justify">
        Tu seguridad es muy importante para nosotros, es por eso que tomaremos todas las medidas de
        seguridad derivadas de la contingencia de COVID-19, a continuación, enlistamos algunas de
        ellas: El lugar del evento es medio abierto. Antes de ingresar a las instalaciones, se
        tomará la temperatura a cada invitado. Cada invitado contará con gel antibacterial. Las
        mesas estarán conformadas de 6 a 8 personas máximo. Las mesas serán distribuidas respetando
        la sana distancia entre cada una de ellas. Uso indispensable de cubre boca. En caso de tener
        alguno de los síntomas relacionados con COVID-19, notifica a los novios. ¡Si te cuidas tú,
        nos cuidamos todos!
      </p>
      {hasInvitation ? (
        <Fragment>
          <h3 className="flex heading-text justify-center mt-10">Confirma tu asistencia</h3>
          <p className="mt-5">Llena nuestro formulario y sé parte de nuestro gran día.</p>
          <p className="mt-5"> Dale click al siguiente botón.</p>
          <PopupButton
            id="h1Xufz1d"
            style={{ fontSize: 20 }}
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full mt-5"
          >
            RSVP
          </PopupButton>
        </Fragment>
      ) : null}
    </section>
  )
}

export default Confirmation
