import React from 'react'
import Box from './component/Box'

export default function Stripe() {

  const myNum = 9

  return (
    <div className="bg-primary">
      <ul className="gap-[.5rem] flex py-[1rem] my-padding max-w-[100%] w-[1320px] mx-auto flex-wrap justify-center">
        <Box
          src="/img/stripe1.webp"
          height={71-myNum}
          width={48-myNum}
          alt="escarapela"
          title="ISO 9001 - 2015"
          description= "Servicios educativo de calidad internacional"
        />
        <Box
          src="/img/stripe2.webp"
          height={66-myNum}
          width={66-myNum}
          alt="universidad"
          title="Respaldo"
          description="Válida para concursos públicos y privados"
        />
        <Box
          src="/img/stripe3.webp"
          height={64-myNum}
          width={58-myNum}
          alt="hombre alcanzando un meta"
          title="Mas de 50, 000"
          description="Profesionales han mejorado sus habilidades con nosotros"
        />
        <Box
          src="/img/stripe4.webp"
          height={64-myNum}
          width={64-myNum}
          alt="brazo sosteniendo trofeo"
          title="Más de 12 años"
          description="de experiencia en capacitación de alta calidad"
        />
      </ul>
    </div>
  );
}
