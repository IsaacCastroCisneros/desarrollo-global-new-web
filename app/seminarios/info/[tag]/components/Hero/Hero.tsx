import React from 'react'
import Form from './components/Form';
import Teacher from '../Detalle/components/Detalle/components/Teacher';

export default function Hero() 
{
  return (
    <div className="bg-primary my-padding">
      <article className="custom-container2 !px-0 pt-[1rem] pb-[.5rem] hero-top-margin relative 1250px:h-[453px]">
        <section className="max-w-[662px] text-white">
          <span className="inline-flex mb-[.4rem] items-center gap-[.6rem] rounded-[1rem] bg-white text-[18px] text-red-500 px-[.5rem] py-[.2rem] font-bold">
            <span className="w-[.5rem] h-[.5rem] rounded-[100%] bg-red-500 block"></span>
            Clase en vivo
          </span>
          <h1 className="text-[65px] leading-[3rem] font-bold 1250px:text-[33px] 1250px:leading-[1.6rem]">
            SIGA MEF y el sistema Nacional de Abastecimiento
          </h1>
          <div className="w-[5rem] h-[5px] ml-[1rem] bg-[#fff] mt-[1rem] mb-[.6rem] 1250px:hidden"></div>
          <p className="text-[16px] leading-[22px] 1250px:hidden">
            Si, quieres trabajar en el estado, prepárate y actualízate en
            desarrolloglobal mas de 10 años en programas para la mejora de
            competencias.
          </p>
        </section>
        <Form />
        <Teacher
          container={{
            className: "hidden 1250px:flex text-white text-[12px] gap-[.5rem]",
          }}
          img={{ className: "w-[62px] h-[62px]" }}
          title={{ className: "text-[12px]" }}
          subtitle={{ className: "text-[12px]" }}
        />
      </article>
    </div>
  );
}
