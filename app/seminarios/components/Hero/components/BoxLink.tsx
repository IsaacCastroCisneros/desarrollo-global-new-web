import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends LinkProps
{
    label:string
    icon:IconProp
    className?:string
}

export default function BoxLink(myProps:props) 
{
  const
  {
    label,
    icon,
    className,
    ...props
  }=myProps

  return (
    <Link
      {...props}
      className={twMerge(
        "bg-myBlue5 text-[#fff] px-[1.5rem] rounded-[5rem] flex gap-[1rem] items-center py-[.5rem]",
        className
      )}
    >
      <FontAwesomeIcon icon={icon} size='2xl' />
      <span className="text-[22px] font-bold 500px:text-[.8rem] text-left">{label}</span>
    </Link>
  );
}
