import React,{InputHTMLAttributes} from 'react'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  label:string
}

export default function CheckBox({label,...props}:props ) 
{

  return (
    <div className="flex gap-[.5rem] justify-center mb-[1rem]">
      <input {...props} type="checkbox" />
      <label className="text-[14px]">{label}</label>
    </div>
  );
}
