import { faCircleDollarToSlot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
    className:string
    title:string
    subitlte:string
}

export default function Box({className,title,subitlte}:props) 
{
  return (
    <div className={twMerge("border-[3px] px-[.5rem] py-[.3rem] flex items-start gap-[.5rem] rounded-[.5rem]", className)}>
      <FontAwesomeIcon icon={faCircleDollarToSlot} className='mt-[.3rem] 1000px:hidden' />
      <section className="flex flex-col">
        <span className='font-bold text-[22px] 1000px:text-[19px]'>{title}</span>
        <span className='text-[16px]'>{subitlte}</span>
      </section>
    </div>
  );
}
