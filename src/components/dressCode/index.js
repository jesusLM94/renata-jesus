import React from 'react'
import { IconContext } from 'react-icons'
import { GiAmpleDress, GiTie } from 'react-icons/gi'

const Dresscode = () => {
  return (
    <div>
      <h3 className="flex dancing-script justify-center text-4xl mt-10">Dresscode</h3>
      <IconContext.Provider value={{ className: 'text-9xl' }}>
        <div className="flex flex-wrap justify-center mt-5">
          <GiAmpleDress />
          <GiTie />
        </div>
      </IconContext.Provider>

      <span className="flex justify-center text-2xl pt-5">Elegante</span>
    </div>
  )
}

export default Dresscode
