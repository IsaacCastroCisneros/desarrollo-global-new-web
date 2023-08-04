import React from 'react'
import Image from 'next/image'
import Stripe from './components/Stripe';
import Button from '../Button/Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Card() 
{
  return (
    <div className="w-[385px] 500px:w-[100%] rounded-[.5rem] overflow-hidden flex flex-col my-shadow mx-auto">
      <section className="relative my-shadow block">
        <Image
          src="/img/cardexample.webp"
          className='500px:w-[100%]'
          width={385}
          height={243}
          alt="hombre viendo estadisticas"
        />
        <div className="flex justify-center gap-[1rem] py-[.3rem] absolute w-[100%] bottom-0 bg-white">
          <span className="capitalize text-[18px]">
            curso especializados
          </span>
          <span className="bg-myRed gap-[.5rem] text-[#fff] px-[.6rem] rounded-[.3rem] flex items-center">
            <span className="w-[10px] h-[10px] rounded-[100%] bg-white block"></span>
            <span className="block text-[14px]">en vivo</span>
          </span>
        </div>
      </section>
      <section className="flex-1 p-[1.3rem]">
        <span title='Administración Financiera y Gestión Gubernamental' className="text-primary text-center text-[28px] font-bold px-[1rem] leading-[1.5rem] mb-[1rem] line-clamp-3">
          Administración Financiera y Gestión Gubernamental
        </span>
        <Stripe
          src="/img/cardimg1.webp"
          width={25}
          height={22}
          alt="icono de escarapela y diploma"
          label="Certificación 80 Horas"
        />
        <Stripe
          src="/img/cardimg2.webp"
          width={25}
          height={24}
          alt="calendario"
          label="Inicia 25 de Agosto 2022"
        />
        <div className='flex justify-between my-[1rem] items-center'>
          <section className='flex-col leading-[1.5rem]'>
             <span className='uppercase text-[18px] font-extrabold 500px:text-[17px]'>
                 precio oferta
             </span>
             <span className='text-red-500 text-[43px] font-extrabold 500px:text-[35px]'>
                S/397
             </span>
             <span className='text-[12px] flex gap-[.5rem]'>
                precio normal <span className='line-through'>S/.497</span>
             </span>
          </section>
          <section className='bg-myYellow px-[.8rem] py-[.4rem] text-center rounded-[.5rem]'>
             <span className='text-[42px] font-extrabold italic block 500px:text-[30px]'>
                25%
             </span>
             <span className='capitalize text-[14px] italic block'>
                Descuento
             </span>
          </section>
        </div>
        <Button name='Más informacion' title='Más informacion' icon={faPen}  className='w-[100%] font-bold px-[1rem]'>Más informacion</Button>
      </section>
    </div>
  );
}
