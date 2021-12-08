import React from 'react'

const Welcome = () => {
  return (
    <div className="text-center mt-5 sm:mt-10">
      <div className="text-lg sm:text-2xl m-5 sm:m-10">
        <p className="flex heading-text justify-center ">
          Con la bendición de Dios y en compañía de nuestros padres
        </p>

        <div className="flex flex-col items-center justify-center my-5 sm:my-10">
          <div className="flex">
            <p className="mt-3 sm:mt-2 mr-3 sm:mr-10 text-right">Laura Isabel Villaseñor Aguirre</p>
            <p className="mt-3 sm:mt-2 text-left">Nelva Gpe.Montelongo Galván</p>
          </div>

          <div className="flex">
            <p className="mt-3 sm:mt-2 mr-3 sm:mr-10 text-right">Carlos René Salazar Hernández</p>
            <p className="mt-3 sm:mt-2 text-left">Jesús Manuel Lizárraga Calleros</p>
          </div>
        </div>
        <p className="my-10">Y nuestros padrinos Ana García Sauceda y José Montelongo Galván</p>

        <p className="mt-5 sm:mt-10">Uniremos nuestras vidas en matrimonio</p>
      </div>
      <h3 className="hidden sm:flex heading-text justify-center mt-5">
        Renata Salazar & Jesús Lizárraga
      </h3>
      <p className="flex sm:hidden heading-text justify-center mt-5">Renata Salazar </p>
      <p className="flex sm:hidden heading-text justify-center mt-1.5">&</p>
      <p className="flex sm:hidden heading-text justify-center mt-1.5">Jesús Lizárraga</p>
      <p className="flex justify-center text-lg sm:text-2xl m-5 sm:m-10">
        Tenemos el honor de invitarte a nuestra Boda.
      </p>
    </div>
  )
}

export default Welcome
