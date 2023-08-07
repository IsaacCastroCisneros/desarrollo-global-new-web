"use client"

import Block from '@/components/Block/Block'
import React, { useState } from 'react'
import Accordion from './components/Accordion/Accordion';
import accordions from './util/accordions';
import useAccordion from '@/hooks/useAccordion';

export default function CatalogoDeProgramas() 
{
  const{handleUpdating,current,handleIsActive}=useAccordion()

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
            current={current}
            id={pos}
            handleUpdating={handleUpdating}
            handleIsActive={handleIsActive}
            items={accordion.items}
          />
        ))}
      </div>
    </Block>
  );
}
