import React, { useEffect, useMemo, useState } from 'react'
import { isEmpty, calculateTimeLeft } from './helpers'
import './index.scss'

const CountdownTimer = ({ startDate }) => {
  const initialTimeLeft = useMemo(() => calculateTimeLeft(startDate), [startDate])

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimeLeft = calculateTimeLeft(startDate)

      if (isEmpty(currentTimeLeft)) {
        clearInterval(interval)
      }
      setTimeLeft(currentTimeLeft)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    return (
      <div key={interval} className="countdown-elements">
        <span>{timeLeft[interval]}</span>
        <span>{interval} </span>
      </div>
    )
  })

  return (
    <div className="countdown-container">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )
}

export default CountdownTimer
