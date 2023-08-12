import HeroBanner from '@/components/HeroBanner/HeroBanner'
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox'
import Image from 'next/image'
import React from 'react'

export default function Hero() 
{
  return (
    <HeroBanner className="items-stretch py-[0]">
      <HeroLeftBox
        className="hero:pt-0 bg-transparent pt-[calc(44px_+_81px)]"
        upperTitle="nosotros"
        title="Descubre porque alcanzar tus objetivos profesionales con nosotros"
        subtitle={
          <>
            <Image
              src="/img/nosotroslogo.webp"
              className="mb-[.4rem] relative hero-response:mx-auto"
              width={748}
              height={134}
              alt="logo desarrollo y certificacion iso"
            />
            <p className="text-[22px] text-[#0D30A7] relative font-medium hero-response:text-center">
              {`Nuestra empresa cuenta con la "Certificación de calidad" ISO 9001-2015`}
            </p>
          </>
        }
      />
      <div className="flex-1 hero-response:hidden"></div>
      <div className="w-[100%] max-w-[100%] overflow-hidden h-[647px] absolute left-[0rem] top-[0] 1736px:hidden">
        <Image
          width={1999}
          height={815}
          className="absolute left-[0] bottom-0"
          alt="grupo de profesionales"
          src="/img/nosotrosBg.webp"
        />
      </div>
    </HeroBanner>
  );
}
