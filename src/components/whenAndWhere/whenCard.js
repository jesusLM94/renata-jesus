import React from 'react'
import './index.scss'

const Card = (props) => {
  const { title, text, time, imageSrc, directions } = props

  return (
    <div className="m-5 w-full sm:w-5/12">
      <figure class="bg-custom rounded-xl p-3 sm:p-8 text-center">
        <h5 className="text-xl flex flex-wrap justify-center mb-2 font-bold">{title}</h5>
        <p className="text-lg flex flex-wrap justify-center mb-2">{text}</p>
        <p className="text-lg flex flex-wrap justify-center mb-5">{time}</p>
        <img src={imageSrc} alt="party" className="w-full p-1" />
        <a
          className="flex justify-center cursor-pointer bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full mt-5 w-full"
          href={directions}
          target="_blank"
          rel="noreferrer"
        >
          Ver Mapa
        </a>
      </figure>
    </div>
  )
}

export default Card
