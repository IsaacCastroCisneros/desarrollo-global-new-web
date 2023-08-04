import React from 'react'
import box from '../interfaces/box'
import Image from 'next/image'

export default function Box({title,content,img}:box) 
{
  return (
    <div className='border-[4px] text-primary border-primary flex-col pt-[2rem] pb-[1rem] px-[1.5rem] bg-white flex-1 items-center flex rounded-[1rem]'>
         <Image src={img.src} alt={img.alt} width={120} height={120} className='mb-[.8rem]'/>
         <strong className='uppercase text-[28px] mb-[.8rem]'>
            {title}
         </strong>
         {
            content
         }
    </div>
  )
}
