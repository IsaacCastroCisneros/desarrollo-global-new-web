import Image, { ImageProps } from 'next/image'
import React from 'react'

interface props extends ImageProps
{
   label:string,
}

export default function Stripe({label,...props}:props) 
{
  return (
    <div 
      className="flex justify-between px-[1.8rem] py-[.5rem] rounded-[.3rem] border-myBlue border-[1px] items-center mb-[.5rem]">
      <Image
        {...props}
      />
      <p className="text-myBlue text-[18px] capitalize">{label}</p>
    </div>
  );
}
