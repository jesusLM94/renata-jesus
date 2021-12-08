import React from 'react'

const Welcome = () => {
  return (
    <div className="text-center mt-5 sm:mt-10">
      <div className="text-lg sm:text-2xl m-5 sm:m-10">
        <p className="flex heading-text justify-center ">
          Con la bendición de Dios y en compañía de nuestros padres
        </p>

        <div className="hidden sm:flex items-center justify-center my-5 sm:my-10">
          <div className="flex text-right flex-col mr-1.5 sm:mr-5">
            <p className="mt-3 sm:mt-2">Laura Isabel Villaseñor Aguirre</p>
            <p className="mt-3 sm:mt-2">Carlos René Salazar Hernández</p>
          </div>

          <div className="flex text-left flex-col ml-1.5 sm:ml-5">
            <p className="mt-3 sm:mt-2">Nelva Gpe. Montelongo Galván</p>
            <p className="mt-3 sm:mt-2">Jesús Manuel Lizárraga Calleros</p>
          </div>
        </div>

        <div className="flex sm:hidden flex-col items-center justify-center my-5 sm:my-10">
          <p>Laura Isabel Villaseñor Aguirre</p>
          <p className="mt-3">Carlos René Salazar Hernández</p>
          <p className="mt-3">Nelva Guadalupe Montelongo Galván</p>
          <p className="mt-3">Jesús Manuel Lizárraga Calleros</p>
        </div>

        <p className="mt-7 sm:mt-10">Y nuestros padrinos</p>
        <p className="">Ana García Sauceda y José Montelongo Galván</p>

        <p className="mt-7 sm:mt-10">Uniremos nuestras vidas en matrimonio</p>
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
