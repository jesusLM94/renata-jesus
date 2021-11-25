import React from 'react'
import CountdownTimer from '../countDownTimer'
import './index.scss'

const HeroImage = () => {
  const importantDate = 'February 25, 2022 18:30:00'

  return (
    <div className="hero-image">
      <h3 className="hero-title">Nuestra Boda</h3>
      <CountdownTimer startDate={importantDate} />
    </div>
  )
}

export default HeroImage
