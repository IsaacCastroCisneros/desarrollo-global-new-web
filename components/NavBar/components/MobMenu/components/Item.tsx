import Link, { LinkProps } from 'next/link'
import React from 'react'

interface props extends LinkProps
{
  label:string
}

export default function Item({label,...props}:props) 
{
  return (
    <li>
        <Link
         {...props}
         className='text-[18px] hover:opacity-[.8]'
         >
         {
            label
         }
        </Link>
    </li>
  )
}
