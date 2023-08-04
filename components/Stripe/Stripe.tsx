import React from 'react'
import Box from './component/Box'

export default function Stripe() {
  return (
    <div className='bg-primary'>
       <ul className='gap-[1rem] flex py-[1rem] my-padding max-w-[100%] w-[65rem] mx-auto flex-wrap justify-center'>
          <Box src="/img/stripe1.webp" height={71} width={48} alt='escarapela' title='ISO 9001 - 2015' description='Servicios educativo de calidad internacional' />
          <Box src="/img/stripe2.webp" height={66} width={66} alt='universidad' title='FCE-UNMSM' description='Válida para concursos públicos y privados' />
          <Box src="/img/stripe3.webp" height={64} width={58} alt='hombre alcanzando un meta' title='Mas de 50, 000' description='Profesionales han mejorado sus habilidades con nosotros' />
          <Box src="/img/stripe4.webp" height={64} width={64} alt='brazo sosteniendo trofeo' title='Más de 12 años' description='de experiencia en capacitación de alta calidad' />
       </ul>
    </div>
  )
}
