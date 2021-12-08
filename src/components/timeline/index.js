import React from 'react'
import { FaChurch, FaCocktail } from 'react-icons/fa'
import { MdDinnerDining } from 'react-icons/md'
import { BiMusic } from 'react-icons/bi'
import TimelineItem from './timelineItem'

const Timeline = () => {
  const iconClassName = 'text-4xl sm:text-7xl '

  return (
    <div className="container mx-auto w-full h-full">
      <h3 className="flex heading-text justify-center mt-10">Nuestro día</h3>
      <div className="relative wrap overflow-hidden p-3 sm:p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: '50%' }}
        />
        {/* <!-- right timeline --> */}
        <TimelineItem
          side={'right'}
          time={'6:30 P.M.'}
          title={'Ceremonia Religiosa'}
          icon={<FaChurch className={iconClassName} />}
        />

        {/* <!-- left timeline --> */}
        <TimelineItem
          side={'left'}
          time={'8:00 P.M.'}
          title={'Cocktails y Fotos'}
          icon={<FaCocktail className={iconClassName} />}
        />

        {/* <!-- right timeline --> */}
        <TimelineItem
          side={'right'}
          time={'9:00 P.M.'}
          title={'Cena'}
          icon={<MdDinnerDining className={iconClassName} />}
        />

        {/* <!-- left timeline --> */}
        <TimelineItem
          side={'left'}
          time={'10:00 P.M.'}
          title={'¡A Bailar!'}
          icon={<BiMusic className={iconClassName} />}
        />
      </div>
    </div>
  )
}

export default Timeline
