import React from 'react'
import Image from 'next/image'
import Stripe from './components/Stripe';
import Button from '../Button/Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Card() 
{
  return (
    <div className="w-[370px] rounded-[.5rem] overflow-hidden flex flex-col my-shadow">
      <section className="relative my-shadow block">
        <Image
          src="/img/cardexample.webp"
          width={370}
          height={243}
          alt="hombre viendo estadisticas"
        />
        <div className="flex justify-center gap-[1rem] py-[.3rem] absolute w-[100%] bottom-0 bg-white">
          <strong className="capitalize text-[18px]">
            curso especializados
          </strong>
          <span className="bg-red-500 gap-[.5rem] text-[#fff] px-[.6rem] rounded-[.3rem] flex items-center">
            <span className="w-[10px] h-[10px] rounded-[100%] bg-white block"></span>
            <span className="block text-[14px]">en vivo</span>
          </span>
        </div>
      </section>
      <section className="flex-1 bg-bg p-[1.3rem]">
        <p className="text-primary text-center text-[28px] block px-[1rem] line-clamp-3 leading-[1.5rem] mb-[1rem]">
          Administración Financiera y Gestión Gubernamental
        </p>
        <Stripe
          src="/img/cardimg1.webp"
          width={25}
          height={22}
          alt="icono de escarapela y diploma"
          label="Certificación Universitaria"
        />
        <Stripe
          src="/img/cardimg2.webp"
          width={25}
          height={24}
          alt="calendario"
          label="Inicia 25 de Agosto 2022"
        />
        <div className='flex justify-center gap-[2rem] my-[1rem]'>
          <section className='flex-col leading-[1.5rem]'>
             <p className='uppercase text-[18px]'>
                 precio oferta
             </p>
             <p className='text-red-500 text-[43px]'>
                S/397
             </p>
             <span className='text-[12px]'>
                precio normal <span className='line-through'>S/.497</span>
             </span>
          </section>
          <section className='bg-myYellow px-[.8rem] py-[.4rem] text-center rounded-[.5rem]'>
             <p className='text-[42px]'>
                25%
             </p>
             <p className='capitalize text-[14px]'>
                Descuento
             </p>
          </section>
        </div>
        <Button name='Más informacion' title='Más informacion' icon={faPen}  className='w-[100%]'>Más informacion</Button>
      </section>
    </div>
  );
}
