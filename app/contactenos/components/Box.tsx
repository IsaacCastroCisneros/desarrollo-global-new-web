import React from 'react'
import box from '../interfaces/box'
import Image from 'next/image'

export default function Box(props:box) 
{
  const
  {
    img,
    title,
    subtitle,
    content
  }=props

  return (
    <div className="bg-white flex flex-col pt-[2.9rem] pb-[1.5rem] px-[2rem] my-shadow rounded-[1rem] flex-1 justify-between">
      <div className="flex items-center flex-col text-center h-[215px] 700px:h-[177px] justify-between">
        <Image {...img} alt={img.alt} className="mb-[.7rem]" />
        <strong className="text-primary text-[35px] leading-[1.5rem]">
          {title}
        </strong>
        {subtitle && <p className="text-center block">{subtitle}</p>}
      </div>
      {content}
    </div>
  );
}
