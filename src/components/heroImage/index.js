import React from 'react'
import CountdownTimer from '../countDownTimer'
import './index.scss'

const HeroImage = () => {
  const importantDate = 'February 25, 2022 18:30:00'

  return (
    <section id="home">
      <div className="hero-image">
        <div className="w-full h-full bg-blue top-0 left-0 absolute opacity-25" />
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center text-white">
          <div className="hero-title text-4xl sm:text-8xl">Nuestra Boda</div>
          <CountdownTimer startDate={importantDate} />
        </div>
      </div>
    </section>
  )
}

export default HeroImage
