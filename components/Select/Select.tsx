import selectOption from '@/interfaces/selectOption'
import formField from '@/styles/formField'
import React,{SelectHTMLAttributes} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends SelectHTMLAttributes<HTMLSelectElement> 
{
  options:Array<selectOption>
  label:string
}

export default function Select(myProps:props) 
{
  const 
  { 
    options, 
    className, 
    label, 
    value,
    ...props 
  }= myProps;

  const classNameTw=twMerge(formField,className)

  return (
    <select className={classNameTw} {...props} value={value===""?"default-value":value} >
      <option value="default-value" disabled>{label}</option>
     {
       options.map((option,pos)=>
       (
         <option key={pos} value={option.value} >{option.label}</option>
       ))
     }
    </select>
  )
}
