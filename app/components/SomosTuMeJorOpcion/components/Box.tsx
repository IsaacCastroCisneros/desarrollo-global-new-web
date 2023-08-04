import React from 'react'
import box from '../interfaces/box'
import Image from 'next/image'

export default function Box({text,img}:box) 
{
  return (
    <div className="flex items-center gap-[0]">
      <div className="min-w-[3.4rem] flex justify-start">
        <Image {...img} alt={img.alt} />
      </div>
      <p className="text-[22px] 700px:text-[16px] font-bold">{text}</p>
    </div>
  );
}
