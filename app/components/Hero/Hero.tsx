import Image from 'next/image'
import React from 'react'
import HeroLink from './components/HeroLink';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function Hero() 
{
  return (
    <HeroBanner
      className="pb-0 hero:pb-[2rem] items-stretch"
      bgUrl="/img/indexBG.webp"
    >
      <section className="flex-1 hero:text-center flex flex-col justify-center hero:pt-0">
        <h1 className="text-primary font-bold text-[60px] leading-[2.7rem] mb-[1rem] hero:text-[33px] hero:leading-[2rem] hero:text-center">
          <span className="hero:flex hero:justify-center  flex">
            <span>Obtén la</span>&nbsp;<span className="text-myGreen">Certificación</span>
          </span>
          que necesitas para trabajar en el estado
        </h1>
        <p className="text-[28px] mb-[1.2rem] hero1:text-[20px] text-primary">
          {` "Únete a nuestra comunidad de más de 50,000 alumnos capacitados y
              certificados."`}
        </p>
        <div className="gap-[1rem] hero:justify-center flex-wrap hero1:flex-col inline-flex">
          <HeroLink href="/cursos">Cursos</HeroLink>
          <HeroLink href="/diplomas">Diplomas</HeroLink>
          <HeroLink href="/inHouse">InHouse</HeroLink>
        </div>
      </section>
      <section className="hero:hidden flex items-end">
        <Image
          src="/img/heroLeftImg.webp"
          width={594}
          className="mx-auto w-[100%]"
          height={513}
          alt="hombre sosteniendo laptop"
        />
      </section>
    </HeroBanner>
  );
}
