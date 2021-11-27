import React from 'react'
import { AiFillBank } from 'react-icons/ai'
import liverpoolLogo from '../../assets/images/liverpool-logo.png'
import './index.scss'

const GiftTable = () => {
  const [showCollapsible, setShowCollapsible] = React.useState(false)

  const toggleCollapsible = () => {
    setShowCollapsible(!showCollapsible)
  }

  return (
    <section id="gift-table">
      <h3 className="flex dancing-script justify-center text-4xl mt-10">Mesa de Regalos</h3>
      <p className="flex justify-center text-lg pt-5">
        Que le caigas es nuestro mayor regalo, pero caite con algo no seas codo
      </p>
      <div className="flex justify-center text-lg mt-10">
        <div>
          <a href="#" className="btn-link h-16 overflow-hidden p-12">
            <img
              className="slex-shrink-0 min-w-full min-h-full"
              src={liverpoolLogo}
              alt="Liverpool"
            />
          </a>
        </div>

        <div>
          <button className="btn-link flex flex-wrap justify-center" onClick={toggleCollapsible}>
            <AiFillBank className="m-3 text-3xl" />
            Ayúdanos con nuestra Luna de Miel
          </button>
          {showCollapsible ? (
            <div className="border border-b-0 px-10 py-6">Estos son nuestros datos bancarios</div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default GiftTable
