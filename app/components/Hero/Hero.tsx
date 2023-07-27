import Image from 'next/image'
import React from 'react'
import HeroLink from './components/HeroLink';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function Hero() 
{
  return (
    <HeroBanner className='pb-0'>
      <section className="flex-1 hero:text-center">
        <h1 className="text-primary font-bold text-[60px] leading-[2.7rem] mb-[1rem] hero:text-[33px] hero:leading-[2rem]">
          Obtén la <span className="text-myGreen2">Certificación</span> que
          necesitas para trabajar en el estado
        </h1>
        <p className="text-[28px] mb-[1.2rem] hero1:text-[20px]">
          {` "Únete a nuestra comunidad de más de 50,000 alumnos capacitados y
              certificados."`}
        </p>
        <div className="gap-[1rem] hero:justify-center flex-wrap hero1:flex-col inline-flex">
          <HeroLink href="/cursos">Cursos</HeroLink>
          <HeroLink href="/diplomas">Diplomas</HeroLink>
          <HeroLink href="/inHouse">InHouse</HeroLink>
        </div>
      </section>
      <section className="flex-1 hero:hidden">
        <Image
          src="/img/heroLeftImg.webp"
          width={663}
          className="mx-auto"
          height={744}
          alt="hombre sosteniendo laptop"
        />
      </section>
    </HeroBanner>
  );
}
