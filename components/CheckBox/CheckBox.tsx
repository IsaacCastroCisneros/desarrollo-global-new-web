import React,{HtmlHTMLAttributes, InputHTMLAttributes} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  label:string
  container?:HtmlHTMLAttributes<HTMLElement>
}

export default function CheckBox({label,container={},...props}:props ) 
{
  const{className,...containerProps}=container as HtmlHTMLAttributes<HTMLElement>

  return (
    <div {...containerProps} className={twMerge("flex gap-[.5rem] justify-center mb-[1rem]",className)}>
      <input {...props} type="checkbox" required />
      <label className="text-[14px]">{label}</label>
    </div>
  );
}
