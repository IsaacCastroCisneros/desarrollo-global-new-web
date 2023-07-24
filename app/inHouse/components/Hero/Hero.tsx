import HeroBanner from '@/components/HeroBanner/HeroBanner';
import React from 'react'
import Form from './Form';

export default function Hero() {
  return (
    <HeroBanner className='gap-[1rem] heroInhouse:flex-col pb-[3rem]'>
      <section className="text-[45px] flex-[1.2]">
        <strong className="uppercase hero-uppertitle pl-[1rem] pr-[2rem] py-[.3rem] rounded-[0px_1.5rem_0px_0px] bg-primary text-[#fff] inline-block mb-[1rem]">
          in house
        </strong>
        <h1 className=" text-primary font-bold flex flex-col leading-[2.5rem] mb-[1rem] pr-[3rem] heroInhouse:p-0 heroInhouse:text-center">
          ¿Quieres llevar la capacitación de tu equipo al siguiente nivel?
          <span className="text-myOrange block pr-[5rem] heroInhouse:p-0 heroInhouse:text-center">
            ¡Tenemos la solución perfecta para ti!
          </span>
        </h1>
        <p className="text-[24px] heroInhouse:text-center">
          Ofrecemos más de 200 programas de capacitación en modalidad in-house,
          diseñados para satisfacer las necesidades específicas de tu entidad o
          institución.
        </p>
      </section>
      <section className='flex-1'>
          <Form/>
      </section>
    </HeroBanner>
  );
}
