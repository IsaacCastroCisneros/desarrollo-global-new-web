import HeroBanner from '@/components/HeroBanner/HeroBanner'
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox'
import React from 'react'

export default function page() 
{
  return (
    <HeroBanner bgUrl={false} >
      <HeroLeftBox styles={{subtitle:"text-[35px] leading-[2rem] pr-[4rem] 1362px:pr-0"}} className='max-w-[550px] pb-[4rem] 1362px:max-w-[initial]' title="CONTÁCTANOS PARA OBTENER MÁS INFORMACIÓN" upperTitle='CONTACTO' subtitle="Si necesitas ayuda o tienes alguna pregunta, estamos aquí para asistirte" />
    </HeroBanner>
  )
}
