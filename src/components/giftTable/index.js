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
      <p className="flex justify-center text-lg p-2 sm:p-5 text-center">
        El mejor regalo que nos puedes dar será tu asistencia, pero si quieres obsequiarnos algo,
        agradeceríamos mucho tu apoyo con nuestra luna de miel. O si lo prefieres, te dejamos
        nuestra mesa de regalos.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center text-base sm:text-lg mx-5">
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50762086"
          className="btn-link overflow-hidden p-12"
          target="_blank"
          rel="noreferrer"
        >
          <img className="slex-shrink-0 min-w-full min-h-full" src={liverpoolSvg} alt="Liverpool" />
        </a>

        <div className="mt-5 sm:mt-0 text-base w-full sm:w-80">
          <button className="btn-link flex flex-wrap justify-center" onClick={toggleCollapsible}>
            <AiFillBank className="mr-1 text-lg" />
            Ayúdanos con nuestra Luna de Miel
          </button>
        </div>
      </div>

      {showCollapsible ? (
        <div className="border border-b-0 px-10 py-6 flex items-center flex-col">
          <p className="text-lg">
            <span className="font-black">Titular:</span> Renata Salazar Villaseñor
          </p>
          <p className="text-lg">Tarjeta de débito BBVA</p>
          <p className="text-lg">
            <span className="font-black">Tarjeta:</span> 4152 3134 7439 4397
          </p>
          <p className="text-lg">
            <span className="font-black">Clabe:</span> 012 320 01573189309 0
          </p>
        </div>
      ) : null}
    </section>
  )
}

export default GiftTable
