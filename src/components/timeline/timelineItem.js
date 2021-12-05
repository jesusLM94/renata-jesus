import React from 'react'

const TimelineItem = ({ side, time, title, icon }) => {
  const sideClass =
    side === 'left'
      ? 'flex-row-reverse items-center w-full left-timeline'
      : 'items-center w-full right-timeline'

  const bgColor = side === 'left' ? 'bg-custom' : 'bg-gray-400'

  return (
    <div className={`mb-8 flex justify-between ${sideClass}`}>
      <div className="order-1 w-4/12 sm:w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-sm sm:text-lg">{time}</h1>
      </div>
      <div
        className={`order-1 rounded-lg shadow-xl w-4/12 sm:w-5/12 px-2 sm:px-6 py-2 sm:py-4 ${bgColor}`}
      >
        <h3 className="flex justify-center text-center mb-3 font-bold sm:text-xl text-gray-800">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center mt-5">{icon}</div>
      </div>
    </div>
  )
}

export default TimelineItem
