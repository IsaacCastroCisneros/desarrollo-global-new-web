import HeroBanner from '@/components/HeroBanner/HeroBanner'
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <HeroBanner className="items-stretch py-0">
      <HeroLeftBox
        className='pt-[calc(70.88px_+_5rem)] bg-transparent'
        upperTitle="nosotros"
        title="Descubre porque alcanzar tus objetivos profesionales con nosotros"
        subtitle={
          <>
            <Image
              src="/img/nosotroslogo.webp"
              className="mb-[1rem]"
              width={748}
              height={134}
              alt="logo desarrollo y certificacion iso"
            />
            <p className="text-[22px] text-[#0D30A7]">
              {`Nuestra empresa cuenta con la "Certificación de calidad" ISO 9001-2015`}
            </p>
            <div className='w-[100%] h-[100%] absolute bg-[#fff] opacity-[.5] top-0 left-0 z-0'></div>
          </>
        }
      />
      <div className="flex-1 relative"></div>
      <Image
        width={1600}
        height={652}
        className="w-[1600px] h-[652px] absolute bottom-0"
        alt="grupo de profesionales"
        src="/img/heroNosotrosbanner.webp"
      />
    </HeroBanner>
  );
}
