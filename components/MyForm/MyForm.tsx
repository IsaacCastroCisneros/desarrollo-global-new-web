"use client"

import React, { ReactNode,FormHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends FormHTMLAttributes<HTMLFormElement>
{
  children:ReactNode
}

export default function MyForm({children,className,...props}:props) 
{
  const classNameTw=twMerge('',className) 

  return (
    <form
      {...props}
      className={classNameTw}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </form>
  );
}
