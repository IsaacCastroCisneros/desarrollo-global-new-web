import link from '@/components/NavBar/interfaces/link'
import Link from 'next/link'
import React from 'react'

export default function Item({label,...props}:link) 
{
  return (
    <li>
        <Link
         {...props}
         className='text-[18px] hover:opacity-[.8] capitalize outline-none'
         >
         {
            label
         }
        </Link>
    </li>
  )
}
