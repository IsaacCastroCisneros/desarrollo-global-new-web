import Image from 'next/image'
import React from 'react'

export default function ProfesorCard() 
{
  return (
    <div className="w-[264px] rounded-[.5rem] mx-auto overflow-hidden">
      <div className="w-[100%] h-[264px] bg-gray-200 rounded-t-md"></div>
      <div className="w-full pt-[.5rem] bg-myBlue4 px-[.7rem] text-[#fff] h-[208px] flex flex-col justify-between">
        <div className='flex flex-col'>
          <span className="text-center text-[19px] font-normal line-clamp-2 mb-[.5rem]">
            CPC Marlom Prieto
          </span>
          <span className="text-[14px] text-center font-semibold line-clamp-2">
            Especialista en <br /> Finanzas Publicas
          </span>
        </div>
        <Image
          src="/img/estrellas.webp"
          alt="estrella"
          width={112}
          height={16}
          className="mx-auto pb-[1.8rem]"
        />
      </div>
    </div>
  );
}
