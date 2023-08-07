import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
  styles?:{container?:string,cardBody?:string,title?:string,subtitle?:string}
}

export default function ProfesorCard(props:props) 
{
  const
  {
    styles={cardBody:"",title:"",subtitle:"",container:""}
  }=props

  const{cardBody,title,subtitle,container}=styles

  return (
    <div className={twMerge("w-[264px] rounded-[.5rem] mx-auto overflow-hidden",container)} >
      <div className="w-[100%] h-[264px] bg-gray-200 rounded-t-md"></div>
      <div className={twMerge("w-full pt-[.8rem] bg-myBlue4 px-[.7rem] text-[#fff] h-[185px] flex flex-col justify-between",cardBody)} >
        <div className="flex flex-col">
          <span className={twMerge("text-center text-[19px] font-medium line-clamp-2 mb-[.5rem]",title)}>
            CPC Marlom Prieto
          </span>
          <span className={twMerge("text-[14px] text-center line-clamp-2",subtitle)}>
            Especialista en <br /> Finanzas Publicas
          </span>
        </div>
        <Image
          src="/img/estrellas.webp"
          alt="estrella"
          width={154}
          height={26}
          className="mx-auto pb-[1.8rem]"
        />
      </div>
    </div>
  );
}
