import Image, { ImageProps } from 'next/image'
import React, { ReactNode } from 'react'

interface props extends ImageProps
{
  title:string
  description:ReactNode
  alt:string
}

export default function Box({title,description,alt,...props}:props) 
{
  return (
    <li className="text-[#fff] text-[18px] flex items-center flex-1 gap-[.5rem] min-w-[310px]">
      <div className="min-w-[57px]">
        <Image {...props} alt={alt} />
      </div>
      <div className='flex-1'>
        <strong className="text-[30px]">{title}</strong>
        <p>{description}</p>
      </div>
    </li>
  );
}
