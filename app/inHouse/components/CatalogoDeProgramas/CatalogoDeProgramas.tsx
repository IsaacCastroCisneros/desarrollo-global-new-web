"use client"

import Block from '@/components/Block/Block'
import React, { useState } from 'react'
import Accordion from './components/Accordion/Accordion';
import currentAccordion from './components/Accordion/interfaces/currentAccordion';
import accordions from './util/accordions';

export default function CatalogoDeProgramas() 
{
  const[active,setActive]=useState<currentAccordion>({current:0,show:true})

  return (
    <Block
      title="Catalogo de Programas"
      subtitle="Tenemos los programas para impulsar el crecimiento y el éxito de tu equipo."
    >
      <div className="flex flex-col gap-[.5rem]">
        {accordions.map((accordion, pos) => (
          <Accordion
            key={pos}
            label={accordion.label}
            active={active}
            id={pos}
            items={accordion.items}
            setActive={setActive}
          />
        ))}
      </div>
    </Block>
  );
}
