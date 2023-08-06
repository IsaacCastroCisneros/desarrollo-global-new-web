import Block from '@/components/Block/Block'
import React from 'react'
import Buttons from '../Buttons/Buttons';

export default function SolicitaUnaCotizacionYaMismo() 
{
  return (
    <Block
      styles={{div:"bg-bg2"}}
      title="Solicita una Cotización !Ya mismo!"
      subtitle="Obtenga una propuesta personalizada sin compromiso. Si necesita capacitar a su personal en un tema específico, simplemente envíenos sus datos y estaremos encantados de elaborar una propuesta a medida que se ajuste a sus necesidades."
    >
      <Buttons
        styles={{
          section:
            "text-center flex gap-[5rem] items-stretch 1000px:flex-col 1000px:gap-[3rem]",
        }}
      />
    </Block>
  );
}
