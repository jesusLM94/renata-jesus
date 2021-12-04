import React from 'react'
import './index.scss'

const Card = (props) => {
  const { title, text, mapSrc, time } = props

  return (
    <div className="m-5">
      <figure class="bg-primary rounded-xl sm:p-8">
        <h5 className="text-xl flex flex-wrap justify-center mb-2 font-bold">{title}</h5>
        <p className="text-lg flex flex-wrap justify-center mb-2">{text}</p>
        <p className="text-lg flex flex-wrap justify-center mb-5">{time}</p>
        <iframe
          width="400"
          height="300"
          loading="lazy"
          src={mapSrc}
          allowFullScreen=""
          title={title}
          style={{ border: 0 }}
        ></iframe>
      </figure>
    </div>
  )
}

export default Card
