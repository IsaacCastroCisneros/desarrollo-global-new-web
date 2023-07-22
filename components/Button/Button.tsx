import React,{ButtonHTMLAttributes,ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> 
{
  children:ReactNode
}

export default function Button({children,className,...props}:props) 
{
  const classNameTw = twMerge('capitalize bg-primary text-[#fff] text-[18px] px-[2rem] py-[.6rem] rounded-[.5rem]',className)

  return (
    <button
     {...props}
     className={classNameTw}
     >
        {
            children
        }
    </button>
  )
}
