import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface props
{
  title:string
  button:ReactNode
  className?:string
}

export default function ButonBox({title,button,className}:props) 
{
  const classNameTw=twMerge("flex flex-col gap-[1rem]",className)

  return (
    <div className={classNameTw}>
      <span className="text-[35px] font-medium 700px:text-[22px]">
        {title}
      </span>
      {
        button
      }
    </div>
  );
}
