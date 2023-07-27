import Image, { ImageProps } from 'next/image'
import React from 'react'

interface img extends ImageProps
{
   alt:string
}

interface props
{
  img:img;
  title:string
  description:string
}

export default function Box({img,title,description}:props) 
{
  return (
    <div className='flex flex-col gap-[.8rem] 700px:items-center'>
      <Image {...img} alt={img.alt} />
      <strong>
        {title}:
      </strong>
      <p className='text-[20px]'>
        {description}
      </p>
    </div>
  )
}
