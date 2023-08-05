import HeroBanner from '@/components/HeroBanner/HeroBanner'
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox'
import React from 'react'
import boxes from './util/boxes';
import Box from './components/Box';

export default function page() 
{
  return (
    <>
    <HeroBanner
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
      <div className="absolute bottom-0 translate-y-[70%] 1362px:translate-y-[95%] flex justify-center w-[100%] left-0">
        <div className="flex gap-[1rem] px-[1rem] 1362px:flex-col">
          {boxes.map((box, pos) => (
            <Box {...box} key={pos} />
          ))}
        </div>
      </div>
    </HeroBanner>
    <div className='bg-primary py-[20rem]'>

    </div>
    </>
  );
}
