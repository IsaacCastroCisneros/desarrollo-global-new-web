import Image from 'next/image'
import React from 'react'
import AccordionList from './components/AccordionList/AccordionList';

export default function ContentProgram() {
  return (
    <div className='px-[1.4rem] mb-[4.8rem]'>
      <strong className='text-[26px] text-[#000] mb-[1rem]'>Contenido del Curso</strong>
      <p className=' text-red-500 flex items-center gap-[.7rem] mb-[1.3rem]'>
        <Image
          src="/img/signal.webp"
          width={26}
          height={19}
          alt="icono de señal"
        />
        Este Curso tiene en total 13  sesiones en vivo
      </p>
      <AccordionList/>
    </div>
  );
}
