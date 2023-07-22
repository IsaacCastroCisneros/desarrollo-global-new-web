import Link, { LinkProps } from 'next/link'
import React,{ReactNode} from 'react'

interface props extends LinkProps
{
   children:ReactNode
}

export default function HeroLink({children,...props}:props) 
{
  return (
    <Link  
     className='my-shadow px-[1.2rem] py-[.4rem] text-primary hover:bg-primary hover:text-[#fff] text-[22px]'
     {...props}
     >
      {
        children
      }
    </Link>
  )
}
