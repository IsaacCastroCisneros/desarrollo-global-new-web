import React from 'react'
import Form from './components/Form';
import Teacher from '../Teacher';
import DateTime from '../DateTime';
import Timer from '../Timer/Timer';

export default function Hero() 
{
  return (
    <div className="bg-primary my-padding">
      <article className="custom-container2 !px-0 pt-[1rem] pb-[.5rem] hero-top-margin relative 1250px:h-[453px]">
        <section className="flex flex-col max-w-[662px] text-white relative 1250px:max-w-[100%] 1250px:text-center items-center">
          <span className="self-start inline-flex mb-[.4rem] items-center gap-[.6rem] rounded-[1rem] bg-white text-[18px] text-red-500 px-[.5rem] py-[.2rem] font-bold">
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
          <div className="absolute 1250px:block hidden top-[105%] left-[50%] translate-x-[-50%] w-[500px] 700px:w-[100%]">
            <Teacher
              container={{
                className:
                  "hidden 1250px:flex text-white text-[12px] gap-[.5rem] mb-[1rem] w-[100%]",
              }}
              img={{ className: "w-[62px] h-[62px]" }}
              title={{ className: "text-[12px]" }}
              subtitle={{ className: "text-[12px]" }}
            />
            <DateTime className="hidden 1250px:flex text-[#000] border-[#000] w-[100%] text-left mb-[1rem]" />
            <Form className="relative top-0 w-[100%] mb-[1rem]" />
            <Timer className="text-[#000] w-[100%]" />
          </div>
        </section>
        <Form className="1250px:hidden" />
      </article>
    </div>
  );
}
