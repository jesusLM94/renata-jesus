import React from 'react'
import { AiFillBank } from 'react-icons/ai'
import liverpoolSvg from '../../assets/images/liverpool-logo.svg'
import './index.scss'

const GiftTable = () => {
  const [showCollapsible, setShowCollapsible] = React.useState(false)

  const toggleCollapsible = () => {
    setShowCollapsible(!showCollapsible)
  }

  return (
    <section id="gift-table">
      <h3 className="flex heading-text justify-center mt-10">Mesa de Regalos</h3>
      <p className="flex justify-center text-lg p-5">
        Que le caigas es nuestro mayor regalo, pero caite con algo no seas codo
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center text-base sm:text-lg mx-5">
        <a href="#" className="btn-link overflow-hidden p-12">
          <img className="slex-shrink-0 min-w-full min-h-full" src={liverpoolSvg} alt="Liverpool" />
        </a>

        <div className="mt-5 sm:mt-0 text-base">
          <button className="btn-link flex flex-wrap justify-center" onClick={toggleCollapsible}>
            <AiFillBank className="mr-1 text-lg" />
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
