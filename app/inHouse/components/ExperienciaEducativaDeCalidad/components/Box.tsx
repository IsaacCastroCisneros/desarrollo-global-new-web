import React from 'react'
import Image from 'next/image'

export default function Box({src}:{src:string}) 
{
  return (
        <Image
          src={src}
          width={648}
          height={458}
          className='w-[100%] h-[100%] rounded-[1rem]'
          alt="personas en una clase presencial"
        />
  )
}
