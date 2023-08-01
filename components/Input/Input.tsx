import formField from '@/styles/formField'
import maxNum from '@/util/maxNum'
import noNegativeNum from '@/util/noNegativeNum'
import onlyNumFunc from '@/util/onlyNumFunc'
import onlyTextFunc from '@/util/onlyTextFunc'
import React,{InputHTMLAttributes} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
   onlyText?:boolean
   max?:number
}

export default function Input(myProps:props) 
{
  const
  {
    type="text",
    className,
    required=true,
    onlyText,
    max,
    onChange,
    ...props
  }=myProps

  const classNameTw=twMerge(formField,className)

  return (
    <input
      size={1}
      {...props}
      className={classNameTw}
      type={type}
      required={required}
      onKeyPress={(e: any) => {
        if (type === "number") onlyNumFunc(e);
        if (onlyText) onlyTextFunc(e);
      }}
      onChange={(e) => 
      {
        if(!onChange)return 
        if (max) {
          e.target.value = maxNum(e.target.value, max);
        }

        if(type==="number")
        {
          e.target.value=noNegativeNum(e.target.value)
        }
        onChange(e)
      }}
    />
  );
}
