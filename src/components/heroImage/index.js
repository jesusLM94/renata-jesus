import React from 'react'
import CountdownTimer from '../countDownTimer'
import './index.scss'

const HeroImage = () => {
  const importantDate = 'February 25, 2022 18:30:00'

  return (
    <section id="hero-image" className="hero-image">
      <div className="pt-96 text-white  flex-col">
        <h3 className="hero-title">Nuestra Boda</h3>
        <CountdownTimer startDate={importantDate} />
      </div>
    </section>
  )
}

export default HeroImage
