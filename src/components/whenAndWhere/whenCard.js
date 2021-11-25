import React from 'react'
import './index.scss'

const Card = (props) => {
  const { title, text, mapSrc } = props

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
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
