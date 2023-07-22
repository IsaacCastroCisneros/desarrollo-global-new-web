import Link, { LinkProps } from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends LinkProps
{
   label:string,
}

export default function Item({label,...props}:props) 
{ 
  return (
    <Link
     {...props}
     className='text-[18px] hover:opacity-[.8] transition-all duration-100 capitalize'
     >
      {
        label
      }
    </Link>
  )
}
