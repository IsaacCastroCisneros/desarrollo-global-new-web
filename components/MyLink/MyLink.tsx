import buttonLink from '@/styles/buttonLink'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends LinkProps
{
    children:ReactNode
    className?:string
    target?:string
}

export default function MyLink({children,className,...props}:props) 
{
  const classNameTw=twMerge(buttonLink,className)

  return (
    <Link
       {...props}
       className={classNameTw}
      >
      {children}
    </Link>
  )
}
