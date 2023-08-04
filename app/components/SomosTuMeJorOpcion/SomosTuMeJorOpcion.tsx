import Block from '@/components/Block/Block'
import React from 'react'
import boxes from './util/boxes'
import Box from './components/Box'
import Image from 'next/image'

export default function SomosTuMeJorOpcion() 
{
  return (
    <Block
      styles={{section:'mt-[6rem]'}} 
      title="Somos tu mejor elección en Capacitación"
      subtitle="Con más de 12 años de experiencia en la impartición de capacitaciones virtuales, nos hemos consolidado como el aliado ideal para satisfacer tus necesidades de formación."
    >
      <div className="flex 1300px:flex-col 1300px:gap-[3rem]">
        <section className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-[1.5rem] flex-1">
          {boxes.map((box, pos) => (
            <Box {...box} key={pos} />
          ))}
        </section>
        <section className="flex-[1.3] flex justify-start 1300px:justify-center">
          <Image
            src="/img/lap.webp"
            alt="laptop abierta mostrando el sitio web de desarrollo global"
            width={782}
            height={445}
          />
        </section>
      </div>
    </Block>
  );
}
