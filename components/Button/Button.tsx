import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ButtonHTMLAttributes,ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> 
{
  children:ReactNode
  icon?:IconProp
}

export default function Button({children,className,icon,...props}:props) 
{
  const classNameTw = twMerge('capitalize bg-primary text-[#fff] text-[18px] px-[2rem] py-[.6rem] rounded-[.5rem] gap-[.5rem] flex items-center justify-center',className)

  return (
    <button
     {...props}
     className={classNameTw}
     >
        {
          icon&&<FontAwesomeIcon icon={icon} />
        }
        {
            children
        }
    </button>
  )
}
