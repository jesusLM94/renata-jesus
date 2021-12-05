import React from 'react'
import Card from './whenCard'
import quintaFoto from '../../assets/images/quinta-los-agapantos.jpeg'
import iglesiaFoto from '../../assets/images/iglesia.jpeg'

const WhenAndWhere = () => {
  return (
    <section id="when-and-where">
      <h3 className="flex heading-text justify-center mt-10">¿Dónde & Cuándo?</h3>
      <div className="flex flex-wrap justify-center sm:mt-10">
        <Card
          title="Ceremonia Religiosa"
          time="Viernes 25 de febrero, 6:30 pm"
          text="Parroquia Nuestra Señora de Bugambilias"
          imageSrc={iglesiaFoto}
          directions="https://www.google.com/maps/dir//iglesia+nuestra+se%C3%B1ora+de+bugambilias/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8428ac83205fc78d:0xc73b963bd0ca75c1?sa=X&ved=2ahUKEwi5ivqQ0cv0AhWYmGoFHRPmDJoQ9Rd6BAhWEAU"
        />
        <Card
          title="Recepción"
          text="Quinta los Agapantos"
          time="Viernes 25 de febrero, 8:00 pm"
          imageSrc={quintaFoto}
          directions="https://www.google.com/maps/dir//quinta+los+agapantos/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8428ab34abadeeef:0xd1064427b36cb43e?sa=X&ved=2ahUKEwim4uue0cv0AhVGk2oFHfN_CDYQ9Rd6BAhQEAM"
        />
      </div>
    </section>
  )
}

export default WhenAndWhere
