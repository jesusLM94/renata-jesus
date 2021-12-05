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
  }, [startDate])

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    return (
      <div key={interval} className="flex flex-col items-center justify-center px-3 sm:px-8">
        <span className="mb-3">{timeLeft[interval]}</span>
        <span>{interval} </span>
      </div>
    )
  })

  return (
    <div className="flex justify-center w-full mx-6 text-xl sm:text-2xl space-x-0 space-x-0">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )
}

export default CountdownTimer
