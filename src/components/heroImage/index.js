import React from 'react'
import CountdownTimer from '../countDownTimer'
import heroImage from '../../assets/images/hero-image.png'
import './index.scss'

const HeroImage = () => {
  const importantDate = 'February 25, 2022 18:30:00'

  return (
    <section id="home">
      <div className="w-full relative">
        <div className="w-full h-full bg-yellow-700 top-0 left-0 absolute opacity-10" />
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center text-white">
          <div className="hero-title text-4xl sm:text-8xl">Nuestra Boda</div>
          <CountdownTimer startDate={importantDate} />
        </div>
        <img className="object-cover w-full" src={heroImage} alt="wedding" />
      </div>
    </section>
  )
}

export default HeroImage
