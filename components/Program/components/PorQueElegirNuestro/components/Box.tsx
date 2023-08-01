import React from 'react'
import box from '../interfaces/box'
import Image from 'next/image'

interface props extends box
{}

export default function Box({title,subtitle,img}:props) 
{
  return (
    <li className='bg-[#fff] flex flex-col items-center flex-1 pt-[1rem] pb-[.3rem] px-[.6rem] rounded-[.7rem] my-shadow'>
       <Image {...img} alt={img.alt} />
       <div className='text-[16px] text-center'>
          <strong className='text-primary'>
             {
               title
             }
          </strong>
          <p className='text-primary capitalize'>
            {subtitle}
          </p>
       </div>
    </li>
  )
}
