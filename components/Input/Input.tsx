import React,{InputHTMLAttributes} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
   
}

export default function Input(myProps:props) 
{
  const
  {
    type="text",
    className,
    required=true,
    ...props
  }=myProps

  const classNameTw=twMerge('py-[.3rem] px-[.8rem] flex-1 outline-none border-[1px] focus:border-primary border-border rounded-[.4rem] placeholder:text-[18px] text-[18px] w-[100%] min-w-[225px]',className)

  return (
    <input size={1} {...props} className={classNameTw} type={type}  required={required}/>
  )
}
