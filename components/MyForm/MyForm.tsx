"use client"

import React, { ReactNode,FormHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends FormHTMLAttributes<HTMLFormElement>
{
  children:ReactNode
  submit:()=>Promise<any>
}

export default function MyForm({children,className,submit,...props}:props) 
{
  const classNameTw=twMerge('',className) 

  return (
    <form
      {...props}
      className={classNameTw}
      onSubmit={async(e) => {
        e.preventDefault();
        await submit()
      }}
    >
      {children}
    </form>
  );
}
