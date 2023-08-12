import formField from '@/styles/formField'
import maxNum from '@/util/maxNum'
import noNegativeNum from '@/util/noNegativeNum'
import onlyNumFunc from '@/util/onlyNumFunc'
import onlyTextFunc from '@/util/onlyTextFunc'
import { IconProp, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{InputHTMLAttributes} from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
   onlyText?:boolean
   max?:number
   icon?:IconProp
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
    icon,
    ...props
  }=myProps

  const classNameTw=twMerge(formField,`${className} ${icon ? "pl-[2.5rem]":""}`)

  return (
    <div className="relative flex-1">
      {icon && (
        <div className='flex h-[100%] items-center absolute left-[.8rem] top-0 text-[.8rem] text-myGray7'>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
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
        onChange={(e) => {
          if (!onChange) return;
          if (max) {
            e.target.value = maxNum(e.target.value, max);
          }

          if (type === "number") {
            e.target.value = noNegativeNum(e.target.value);
          }
          onChange(e);
        }}
      />
    </div>
  );
}
