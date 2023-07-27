import formField from '@/styles/formField'
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

  const classNameTw=twMerge(formField,className)

  return (
    <input size={1} {...props} className={classNameTw} type={type}  required={required}/>
  )
}
