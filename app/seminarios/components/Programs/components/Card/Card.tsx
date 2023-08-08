import MyLink from '@/components/MyLink/MyLink'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Card() 
{
  return (
    <div className="rounded-[.8rem] overflow-hidden my-shadow2 h-[515px] flex flex-col">
      <section className="h-[280px] w-[100%] bg-myGray5"></section>
      <section className="flex-1 p-[1rem] flex-col flex justify-between">
        <div>
          <p className='text-[18px] text-myBlue5 block mb-[.5rem]'>Seminario realizado</p>
          <span className="line-clamp-3 text-[22px] leading-[1.2rem] font-bold">
            Curso Administración Financiera y Gestión Gubernamental
          </span>
        </div>
        <MyLink href="" className='border-[3px] border-[#000] bg-[#fff] text-[#000] gap-[1rem] text-[18px]'>
          <FontAwesomeIcon icon={faEye} size='xl' />
          Ver Seminario
        </MyLink>
      </section>
    </div>
  );
}
