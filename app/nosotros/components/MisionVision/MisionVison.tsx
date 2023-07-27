import Image from 'next/image'
import React from 'react'
import Box from './components/Box'

export default function MisionVison() 
{
  return (
    <div>
      <article className="block-container my-padding py-[2rem] flex items-center justify-center gap-[1rem] flex-wrap">
        <Image
          src="/img/DG-Logotipo.webp"
          width={478}
          height={118}
          alt="logo de desarrollo global"
          className='mb-[1rem]'
        />
        <div className="flex gap-[.5rem] flex-wrap justify-center">
          <Box
            title="Misión"
            description={`"En la Escuela "Desarrollo Global", nos dedicamos a fortalecer y desarrollar las competencias profesionales de los funcionarios públicos y privados, impulsando el talento y la productividad en el ámbito laboral. A través de nuestros programas de capacitación de alta calidad, buscamos brindar a nuestros clientes las herramientas necesarias para alcanzar sus objetivos profesionales y personales."`}
          />
          <Box
            title="Visión"
            description={`"Nos esforzamos por consolidarnos como una empresa educativa estratégica para las organizaciones públicas y privadas, siendo reconocidos por nuestra excelencia en el desarrollo del talento humano y la mejora continua de nuestros programas de capacitación."`}
          />
        </div>
      </article>
    </div>
  );
}
