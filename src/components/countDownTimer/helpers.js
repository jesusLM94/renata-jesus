export const calculateTimeLeft = (startDate) => {
  const _startDate = new Date(startDate)
  const difference = _startDate - new Date().getTime()

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export const isEmpty = (value) => {
  return (
    value == null || // From standard.js: Always use === - but obj == null is allowed to check null || undefined
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
