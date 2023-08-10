"use client"

import Button from '@/components/Button/Button';
import CheckBox from '@/components/CheckBox/CheckBox';
import Input from '@/components/Input/Input';
import MyLink from '@/components/MyLink/MyLink';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faClock, faEnvelope, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { twMerge } from 'tailwind-merge';

export default function Form({className}:{className:string} ) 
{

  return (
    <div className={twMerge("w-[500px] text-center rounded-[.8rem] border-[3px] border-[#000] absolute right-0 top-[1.5rem] bg-white text-[#000] py-[1.5rem] px-[2rem] 500px:px-[1.5rem]",className)}>
      <span className="text-[#000] font-bold text-[42px] mb-[.5rem] 500px:text-[28px]">
        Regístrate !Gratis!
      </span>
      <p className="text-[16px] mb-[.3rem] 500px:text-[11px] 500px:mb-[1rem]">
        Te enviaremos un recordatorio antes del inicio.
      </p>
      <div className="flex items-center text-[16px] gap-[.5rem] font-bold justify-center mb-[.7rem] 500px:hidden">
        <Time
          label="Fecha: Jueves 24 Setiembre"
          icon={faCalendar}
          className="max-w-[13rem]"
        />
        <Time label="20:00 PM" icon={faClock} className="max-w-[101.7px]" />
      </div>
      <form className="block">
        <div className="flex flex-col gap-[.5rem]">
          <Input
            icon={faUser}
            placeholder="Nombres"
            className="border-[#000] py-[.5rem] 500px:text-[15px] placeholder:text-[15px]"
          />
          <Input
            icon={faEnvelope}
            placeholder="correo electronico"
            className="border-[#000] py-[.5rem] 500px:text-[15px] placeholder:text-[15px]"
          />
          <Input
            icon={faWhatsapp}
            placeholder="celular o whatsapp"
            className="border-[#000] py-[.5rem] 500px:text-[15px] placeholder:text-[15px]"
          />
        </div>
        <Button className="bg-myOrange 700px:text-[14px] 500px:px-[.5rem] 700px:gap-[.6rem] text-[#fff] w-full font-medium mt-[1rem] mb-[.3rem] justify-start gap-[1rem] px-[calc(1.5rem_+_4px)]">
          <div className="w-[34px] flex 500px:w-[20px] justify-start 500px:text-[11px]">
            <FontAwesomeIcon size="xl" icon={faPen} />
          </div>
          Registrarme al Seminario
        </Button>
        <FormLink
          label="Registrarme por Telegram"
          href=""
          icon={faTelegram}
          className="border-myBlue5 text-myBlue5"
        />
        <FormLink label="Registrarme por Whatsapp" href="" icon={faWhatsapp} />
        <CheckBox
          label="Acepto políticas de privacidad de datos"
          container={{ className: "mt-[1rem] mb-0" }}
        />
      </form>
    </div>
  );
}


function Time({label,icon,className}:{label:string,icon:IconProp,className?:string})
{
    return (
      <div className={twMerge("flex items-center gap-[.5rem]",className)}>
        <FontAwesomeIcon icon={icon} size="lg" className="text-myBlue5" />
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
         {label}
        </span>
      </div>
    );
}

function FormLink(props:{label:string,icon:IconProp,className?:string,href:string})
{
   const{label,icon,className,href}=props

   return (
     <MyLink
       href={href}
       className={twMerge(
         "bg-white w-full border-[4px] 700px:text-[14px] 500px:px-[.5rem] 700px:gap-[.6rem] py-[.3rem] border-myGreen5 text-myGreen5 font-medium justify-start gap-[1rem] px-[1.5rem] mb-[.3rem] 700px:border-[3px]",
         className
       )}
     >
       <div className="w-[34px] flex 500px:w-[20px] justify-start 500px:text-[11px]">
         <FontAwesomeIcon size="2xl" icon={icon} />
       </div>
       {label}
     </MyLink>
   );
}