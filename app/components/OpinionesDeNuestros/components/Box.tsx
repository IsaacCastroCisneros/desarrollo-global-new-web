import Image from 'next/image'
import React from 'react'

export default function Box() {
  return (
    <div className="mx-[1rem] px-[3rem] 800px:mx-[.8rem] 800px:px-[1rem] flex flex-col justify-between h-[440px] my-shadow rounded-[.5rem] py-[1.5rem]">
      <div className='mb-[1rem]'>
        <Image
          width={120}
          height={21}
          className="mb-[1rem]"
          alt="estrellas en fila"
          src="/img/rating.webp"
        />
        <p className="text-[18px] line-clamp-[8] text-center">
          {`"Los cursos en gestión pública que encontré en esta página web han sido realmente enriquecedores. Gracias a ellos, he adquirido conocimientos sólidos y herramientas prácticas que me han ayudado a mejorar mi desempeño en mi trabajo. ¡Altamente recomendados!"`}
        </p>
      </div>
      <div className='flex w-full justify-start gap-[.5rem]'>
        <Image width={71} height={71} className='800px:w-[52px] 800px:h-[52px]' alt='imagen de perfil' src="/img/face.webp"/>
        <div>
           <strong className='block my-elipsis text-[20px] 800px:max-w-[7rem] max-w-[9rem]'>
             Juan P
           </strong>
           <p className='text-[18px] max-w-[9rem] 800px:max-w-[7rem] my-elipsis'>
              Curso SIAF 2023
           </p>
        </div>
      </div>
    </div>
  );
}
