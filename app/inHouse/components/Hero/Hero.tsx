import HeroBanner from '@/components/HeroBanner/HeroBanner';
import React from 'react'
import Form from './components/Form';
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox';

export default function Hero() {
  return (
    <HeroBanner className="gap-[1rem] heroInhouse:flex-col pb-[3rem]">
      <HeroLeftBox
        upperTitle="in house"
        title={
          <>
            ¿Quieres llevar la capacitación de tu equipo al siguiente nivel?
            <span className="text-myOrange block pr-[5rem] heroInhouse:p-0 heroInhouse:text-center">
              ¡Tenemos la solución perfecta para ti!
            </span>
          </>
        }
        subtitle="Ofrecemos más de 200 programas de capacitación en modalidad in-house,
        diseñados para satisfacer las necesidades específicas de tu entidad o
        institución."
      />
      <section className="flex-1">
        <Form />
      </section>
    </HeroBanner>
  );
}
