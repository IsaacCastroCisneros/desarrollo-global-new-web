import HeroBanner from '@/components/HeroBanner/HeroBanner';
import React from 'react'
import Form from './components/Form';
import HeroLeftBox from '@/components/HeroLeftBox/HeroLeftBox';

export default function Hero() {
  return (
    <HeroBanner className="justify-between hero-response:flex-col">
      <HeroLeftBox
        upperTitle="in house"
        styles={{title:"45px pr-0",subtitle:"text-[#000] font-medium"}}
        title={
          <>
            ¿Quieres llevar la capacitación de tu equipo al siguiente nivel?
            <span className="text-myOrange block pr-[3rem] hero-response:p-0 hero-response:text-center">
              ¡Tenemos la solución perfecta para ti!
            </span>
          </>
        }
        subtitle="Ofrecemos más de 200 programas de capacitación en modalidad in-house,
        diseñados para satisfacer las necesidades específicas de tu entidad o
        institución."
      />
      <section className="flex-1 mx-auto">
        <Form />
      </section>
    </HeroBanner>
  );
}
