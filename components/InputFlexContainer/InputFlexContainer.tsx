import React, { Children, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
    children:ReactNode
    className?:string
}

export default function InputFlexContainer({children,className}:props) 
{
  const classNameTw = twMerge('flex gap-[.8rem] mb-[.8rem] flex-wrap',className)

  return (
    <div 
     className={classNameTw}>
       {
        children
       }
    </div>
  )
}
