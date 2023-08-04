import HeroBanner from '@/components/HeroBanner/HeroBanner'
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <HeroBanner className="items-stretch py-0" bg={false} bgUrl={false}>
      <HeroLeftBox
        className="pt-[5rem] hero:pt-0 bg-transparent pb-[3rem] bg-gradient-to-r from-white to-transparent from-[77%] to-100%"
        upperTitle="nosotros"
        title="Descubre porque alcanzar tus objetivos profesionales con nosotros"
        subtitle={
          <>
            <Image
              src="/img/nosotroslogo.webp"
              className="mb-[1rem] relative"
              width={748}
              height={134}
              alt="logo desarrollo y certificacion iso"
            />
            <p className="text-[22px] text-[#0D30A7] relative">
              {`Nuestra empresa cuenta con la "Certificación de calidad" ISO 9001-2015`}
            </p>
          </>
        }
      />
      <div className="flex-1 hero-response:hidden">
        <Image
          width={1600}
          height={652}
          className="w-[1600px] h-[652px] absolute bottom-0 left-0"
          alt="grupo de profesionales"
          src="/img/heroNosotrosbanner.webp"
        />
      </div>
    </HeroBanner>
  );
}
