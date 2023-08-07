"use client"

import React,{useState} from 'react'
import AccordionCurso from './components/AccordionCurso'
import useAccordion from '@/hooks/useAccordion'

export default function AccordionList() 
{
  const{current,handleIsActive,handleUpdating}=useAccordion()

  return (
    <div className="flex flex-col gap-[.3rem] mx-[.4rem]">
      <AccordionCurso
        current={current}
        id={1}
        handleIsActive={handleIsActive}
        handleUpdating={handleUpdating}
      />
      <AccordionCurso
        current={current}
        id={2}
        handleIsActive={handleIsActive}
        handleUpdating={handleUpdating}
      />
      <AccordionCurso
        current={current}
        id={3}
        handleIsActive={handleIsActive}
        handleUpdating={handleUpdating}
      />
    </div>
  );
}
