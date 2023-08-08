import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
    icon:IconProp
    isActive:boolean
    label:string
}


export default function Option(myProps:props) 
{
  const
  {
    icon,
    isActive,
    label,
    className,
    ...props
  }=myProps

  const active = isActive ? 'bg-primary text-[#fff]':'bg-myGray5 text-primary'
  const classNameTw=twMerge(
    `flex-1 flex justify-end gap-[1rem] items-center px-[3rem] 700px:text-[17px] 700px:px-[1rem] py-[1rem] 1300px:py-[.6rem] text-[26px] 1300px:rounded-[5rem] ${active}`,
    twMerge(className,'1300px:justify-center')
  )

  return (
    <button
      {...props}
      className={classNameTw}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="font-bold">{label}</span>
    </button>
  );
}
