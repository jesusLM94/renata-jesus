import React from 'react'
import './index.scss'
import CountdownTimer from '../countDownTimer'

const HeroImage = () => {
  const importantDate = 'February 25, 2022 18:30:00'

  return (
    <div className="hero-image">
      <h3>Nuestra Boda</h3>
      <CountdownTimer startDate={importantDate} />
    </div>
  )
}

export default HeroImage
