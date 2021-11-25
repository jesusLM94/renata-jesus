import React from 'react'
import Card from './whenCard'

const WhenAndWhere = () => {
  return (
    <div>
      <h3 className="flex dancing-script justify-center text-4xl mt-10">¿Dónde & Cuándo?</h3>
      <div className="flex flex-wrap justify-center mt-10">
        <Card
          title="Ceremonia Religiosa"
          text="Parroquia Nuestra Señora de Bugambilias"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.6944455497046!2d-103.4520313850006!3d20.600532186231803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac83205fc78d%3A0xc73b963bd0ca75c1!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20Bugambilias!5e0!3m2!1sen!2smx!4v1636434114799!5m2!1sen!2smx"
        />
        <Card
          title="Fiestón"
          text="Quinta los Agapantos"
          mapSrc={
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13235.708074015962!2d-103.48709467299028!3d20.561046523596442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ab34abadeeef%3A0xd1064427b36cb43e!2sFifth%20the%20agapanthus!5e0!3m2!1sen!2smx!4v1636434794671!5m2!1sen!2smx'
          }
        />
      </div>
    </div>
  )
}

export default WhenAndWhere
