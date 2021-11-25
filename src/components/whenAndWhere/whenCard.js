import React from 'react'
import './index.scss'

const Card = (props) => {
  const { title, text, mapSrc } = props

  return (
    <div className="m-5">
      <div className="card-body">
        <h5 className="text-xl flex flex-wrap justify-center mb-2">{title}</h5>
        <p className="text-lg flex flex-wrap justify-center mb-3">{text}</p>
        <iframe
          width="400"
          height="300"
          loading="lazy"
          src={mapSrc}
          allowFullScreen=""
          title={title}
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  )
}

export default Card
