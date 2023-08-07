import React from 'react'
import Box from './components/Box';
import boxes from './util/boxes';
import options from './util/options';
import Option from './components/Option';

interface props
{

}

export default function PorQueElegirNuestro() 
{
  return (
    <>
      <ul className='absolute w-[100%] flex gap-[1rem] top-[0] translate-y-[-50%]'>
         {
           boxes.map((box,pos)=>
           (
             <Box {...box} key={pos} />
           ))
         }
      </ul>
      <div className="p-[2rem] text-[#000] my-shadow mt-[4.3rem] rounded-[.5rem]">
        <strong className="text-[26px] block mb-[.6rem]">
          ¿Por qué elegir nuestro programa de capacitación?
        </strong>
        <p className='text-[16px]'>
          Te capacitamos con temas actualizados, para que apruebes con éxito tu
          exámen de certificación por niveles. Así mismo te brindamos las pautas
          necesarias para renovar tu certificado a un nivel superior. Te
          ofrecemos el desarrollo del curso con una metodología a base de:
          SIMULACROS Y PRUEBAS DE SALIDA EN CADA SESIÓN ADEMÁS DE SIMULACRO
          FINAL TIPO OSCE EN VIVO.
        </p>
      </div>
      <ul className='flex bg-myGray2 text-[#000] overflow-hidden rounded-[.7rem] mt-[2rem] mb-[2.8rem]'>
        {
          options.map((opt,pos)=>
          (
            <Option key={pos} {...opt} pos={pos} />
          ))
        }
      </ul>
    </>
  );
}
