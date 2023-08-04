import Block from '@/components/Block/Block'
import React from 'react'
import Box from './components/Box';
import boxes from './util/boxes';
import Image from 'next/image';

export default function ExperienciaEducativaDeCalidad() 
{
  return (
    <Block
      title="Experiencia educativa de calidad"
      subtitle="Respaldada por nuestra garantía de excelencia"
    >
      <div className='flex items-center justify-center gap-[1rem] mb-[1rem] 700px:flex-col'>
         <Image src="/img/DG-Logotipo.webp"  className='1000px:w-[200px] 1000px:h-[initial]' width={384} height={90} alt='logo desarrollo global' />
         <Image src="/img/certificacion_iso_co.webp"  className='1000px:w-[150px] 1000px:h-[initial]' width={253} height={120} alt='certificacion iso' />
      </div>
      <div className="grid grid-cols-[repeat(2,1fr)] mx-auto gap-[1rem] 800px:grid-cols-[repeat(1,1fr)] ">
        {
            boxes.map((box,pos)=>
            (
                <Box key={pos} src={box} />
            ))
        }
      </div>
    </Block>
  );
}
