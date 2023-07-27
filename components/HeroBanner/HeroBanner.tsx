import React, { ReactNode,HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props extends HtmlHTMLAttributes<HTMLElement>
{
  children:ReactNode
  bgUrl?:string
  bg?:boolean
}

export default function HeroBanner(myProps: props) 
{
  const{
    className,
    children,
    bgUrl,
    bg=true,
    ...props
  }=myProps

  const classNameTw = twMerge(
    "flex items-center pt-[calc(70.88px_+_5rem)] w-[65rem] max-w-[100%] mx-auto my-padding pb-[3rem] relative hero:pt-[6rem]",
    className
  );

  return (
    <div className={`${bg ? 'bg-bg':'bg-white'}`}>
      <article {...props} className={classNameTw}
      >
        {children}
      </article>
    </div>
  );
}
