import React from 'react'

const TimelineItem = ({ side, time, title, icon }) => {
  const sideClass =
    side === 'left'
      ? 'flex-row-reverse items-center w-full left-timeline'
      : 'items-center w-full right-timeline'

  const bgColor = side === 'left' ? 'bg-primary text-white ' : 'bg-gray-400 text-gray-800'

  return (
    <div className={`mb-8 flex justify-between ${sideClass}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-sm sm:text-lg">{time}</h1>
      </div>
      <div className={`order-1 rounded-lg shadow-xl w-5/12 px-2 sm:px-6 py-2 sm:py-4 ${bgColor}`}>
        <h3 className="mb-3 font-bold sm:text-xl">{title}</h3>
        <div className="flex flex-wrap justify-center mt-5">{icon}</div>
        {/* <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p> */}
      </div>
    </div>
  )
}

export default TimelineItem
