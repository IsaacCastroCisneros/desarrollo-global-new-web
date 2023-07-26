import React, { ReactNode,HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props extends HtmlHTMLAttributes<HTMLElement>
{
  children:ReactNode
  bgUrl?:string
}

export default function HeroBanner({
  className,
  children,
  bgUrl,
  ...props
}: props) {
  const classNameTw = twMerge(
    "flex items-center pt-[calc(70.88px_+_5rem)] w-[65rem] max-w-[100%] mx-auto my-padding relative hero:pb-[3rem] hero:pt-[6rem]",
    className
  );

  return (
    <div className="bg-bg">
      <article {...props} className={classNameTw}>
        {children}
      </article>
    </div>
  );
}
