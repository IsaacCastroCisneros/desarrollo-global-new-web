import Image, { ImageProps } from 'next/image'
import React from 'react'

interface props extends ImageProps
{
  title:string
  description:string
  alt:string
}

export default function Box({title,description,alt,...props}:props) 
{
  return (
    <li className=" text-[#fff] text-[18px] flex items-center flex-1 min-w-[316px] gap-[1rem]">
        <Image {...props} alt={alt} />
      <div>
        <strong className="text-[30px]">{title}</strong>
        <p>{description}</p>
      </div>
    </li>
  );
}
