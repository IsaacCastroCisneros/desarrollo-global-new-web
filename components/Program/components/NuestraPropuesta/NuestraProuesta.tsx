import React from 'react'
import boxes from './util/boxes'
import Box from './components/Box'
import Block from '../Block'
import Image from 'next/image';

export default function NuestraProuesta() 
{
  return (
    <Block
      title="Nuestro propuesta de Valor"
      subtitle={
        <span className="flex justify-center gap-[.5rem]">
          <Image
            src="/img/docentesCur.webp"
            alt="globo de texto con estrellas"
            width={62}
            height={43}
          />
          que nos diferencia
        </span>
      }
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-[1rem] 700px:grid-cols-[1fr] 700px:grid-rows-[repeat(6,213px)] 550px:grid-rows-[repeat(6,360px)]">
        {boxes.map((box, pos) => (
          <Box key={pos} {...box} />
        ))}
      </div>
    </Block>
  );
}
