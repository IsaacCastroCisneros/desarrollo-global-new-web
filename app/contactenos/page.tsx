import HeroBanner from '@/components/HeroBanner/HeroBanner'
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox'
import React from 'react'
import Boxes from './components/Boxes/Boxes';

export default function page() 
{
  return (
    <>
    <HeroBanner
      isLayer={false}
      styles={{container:"bg-[#f8f8f8]"}}
      bgUrl={false}
      divStyle={{
        backgroundImage: `url(/img/mujer-asiatica-agent.webp)`,
        backgroundSize: "contain",
        backgroundPositionX: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroLeftBox
        styles={{
          subtitle:
            "text-[35px] leading-[2rem] 700px:leading-[initial] pr-[4rem] 1362px:pr-0",
        }}
        className="max-w-[550px] 700px:pb-[0rem] 1362px:max-w-[initial] pb-[4rem]"
        title="CONTÁCTANOS PARA OBTENER MÁS INFORMACIÓN"
        upperTitle="CONTACTO"
        subtitle="Si necesitas ayuda o tienes alguna pregunta, estamos aquí para asistirte"
      />
      <Boxes styles='1362px:hidden absolute bottom-0 translate-y-[70%]' />
    </HeroBanner>
    <div className='bg-primary py-[10rem] 1362px:py-[2rem]'>
         <Boxes styles='hidden 1362px:flex' />
    </div>
    </>
  );
}
