import React from 'react'
import { IconContext } from 'react-icons'
import { GiAmpleDress, GiTie } from 'react-icons/gi'

const Dresscode = () => {
  return (
    <div>
      <h3 className="flex heading-text justify-center mt-10">Código de Vestimenta</h3>
      <IconContext.Provider value={{ className: 'text-9xl' }}>
        <div className="flex flex-wrap justify-center mt-5">
          <GiAmpleDress />
          <GiTie />
        </div>
      </IconContext.Provider>

      <span className="flex justify-center text-2xl pt-5">Riguroso Etiqueta</span>
    </div>
  )
}

export default Dresscode
