import React from 'react'
import boxes from '../interfaces/box'
import Image from 'next/image'

export default function Box(props:boxes) 
{
  const
  {
    title,
    description,
    img,
    num
  }=props

  return (
    <div className='bg-myBlue6 text-[#fff] rounded-[.5rem] flex px-[1rem] py-[.7rem]'>
      <section className='flex flex-col w-[5rem]'>
        <Image {...img} alt={img.alt} />
        <span className='font-bold text-[2rem] text-pink-500'>
          {
            num
          }
        </span>
      </section>
      <section className='flex-1'>
        <span className='text-[22px] font-bold'>
           {
            title
           }
        </span>
        <p>
          {
            description
          }
        </p>
      </section>
    </div>
  )
}
