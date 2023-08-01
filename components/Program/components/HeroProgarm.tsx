import React from 'react'
import BlockProgram from '../../BlockProgram/BlockProgram'

interface props
{
  titulo:string
  descripcion:string
  type:"Curso"|"Diploma"|"Diplomado"
}

export default function HeroProgarm({titulo,descripcion,type}:props) 
{
  return (
    <div className="bg-myBlue3 pt-[5rem] pb-[5rem]">
      <BlockProgram>
        <strong className="text-[22px] text-myGreen3 block">
          {type} de Alta Especialización
        </strong>
        <h1 className="text-[45px] block mb-[1rem] font-bold" title={titulo}>
          {titulo}
        </h1>
        <p className="text-[18px]">{descripcion}</p>
      </BlockProgram>
    </div>
  );
}
