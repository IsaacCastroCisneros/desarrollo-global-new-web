import React from 'react'
import Block from '../Block'
import Box from './components/Box';
import MyLink from '@/components/MyLink/MyLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function InversionFormas() 
{
  return (
    <Block
      title="Inversión y Formas de Pago"
      subtitle="Descubre cómo puedes financiar tu capacitación y hacer una inversión en tu futuro profesional."
    >
      <div className="1000px:px-[1rem] 1000px:py-[1.5rem] px-[2rem] py-[3.5rem] bg-bg2 flex items-stretch rounded-[.5rem] text-[#000] 1000px:flex-col">
        <section className="flex-1">
          <span className="font-bold mb-[1rem] text-[30px] leading-[1.4rem] 1000px:text-[24px]">
            <span className="text-myBlue7">Invierta en su futuro y</span>
            hasta un 25% con el precio pronto pago
          </span>
          <span className="text-[18px] mb-[.5rem]">
            Precio para persona natural
          </span>
          <Box
            className="bg-myYellow3 border-[#000] mb-[.7rem]"
            title="Pronto pago: S/ 397.00"
            subitlte="Disponible hasta el 05 de junio"
          />
          <Box
            className="bg-white border-myYellow4 text-myYellow4 mb-[1rem]"
            title="Pronto pago: S/ 497.00"
            subitlte="Despues del 06 de junio"
          />
          <p className="text-[16px] mb-[1rem]">
            Contáctenos para obtener información sobre por tarifas corporativas
            e inscripciones con O/S.
          </p>
          <MyLink
            className="bg-white flex px-[1rem] justify-start font-bold py-[.3rem] text-myGreen7 border-[3px] text-[22px] border-myGreen7"
            href=""
          >
            <FontAwesomeIcon size="xl" icon={faWhatsapp} />
            Contactar asesor
          </MyLink>
        </section>
        <div className="bg-myGray9 w-[1px] mr-[1.3rem] ml-[2rem] 1000px:my-[1rem] 1000px:mr-0 1000px:ml-0 1000px:w-[100%] 1000px:h-[1px]"></div>
        <section className="flex-1">
          <span className="text-[22px] font-bold mb-[.5rem]">
            Pago por Aplicativo
          </span>
          <p className="text-[14px] text-myBlue7 mb-[1rem]">
            Puedes pagar usando medios digitales como yape, plin o
            transferencia.
          </p>
          <div className="flex gap-[1rem] items-center mb-[1rem]">
            <Image
              src="/img/yape.webp"
              width={80}
              height={80}
              alt="logo de yape"
            />
            <Image
              src="/img/plin.webp"
              width={88}
              height={88}
              alt="logo de plin"
            />
          </div>
          <span className="text-[22px] font-bold mb-[.5rem]">
            Pago en linea con tarjeta crédito y/o debito
          </span>
          <p className='text-[14px] mb-[.5rem]'>
            Aceptamos IZIPAY y PAGO EFECTIVO, dos opciones confiables y seguras
            para que puedas realizar tus transacciones con total tranquilidad.
          </p>
          <MyLink className='flex bg-myGreen8 text-[#fff] text-[22px] gap-[2rem] justify-start px-[1.2rem] 1000px:gap-[.5rem]' href="">
            <FontAwesomeIcon icon={faCreditCard}/>
            Pagar con tarjeta
          </MyLink>
        </section>
      </div>
    </Block>
  );
}
