import React from 'react'

export default function Hero() 
{
  return (
    <div className="h-[360px] bg-primary">
      <article className="custom-container2 pt-[1rem] hero-top-margin">
        <section className='max-w-[662px]'>
        <span className="inline-flex mb-[.4rem] items-center gap-[.6rem] rounded-[1rem] bg-white text-[18px] text-red-500 px-[.5rem] py-[.2rem] font-bold">
          <span className="w-[.5rem] h-[.5rem] rounded-[100%] bg-red-500 block"></span>
          Clase en vivo
        </span>
        <h1 className="text-[65px] text-[#fff] leading-[3rem]">
          SIGA MEF y el sistema Nacional de Abastecimiento
        </h1>
        </section>
      </article>
    </div>
  );
}
