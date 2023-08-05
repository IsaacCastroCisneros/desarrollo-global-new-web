import React, { ReactNode,HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props extends HtmlHTMLAttributes<HTMLElement>
{
  children:ReactNode
  bgUrl?:string|false
  bg?:boolean
  divStyle?:Record<any,any>
}

export default function HeroBanner(myProps: props) 
{
  const{
    className,
    children,
    bgUrl="/img/fondoInhouse.png",
    bg=true,
    divStyle,
    ...props
  }=myProps

  const classNameTw = twMerge(
    "flex items-start pt-[5rem] w-[1340px] max-w-[100%] mx-auto my-padding pb-[3rem] relative hero:pt-[3rem]",
    className
  );

  return (
    <div
      className={`${bg ? "bg-bg" : "bg-white"} relative`}
      style={
        bgUrl !== false
          ? {
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div className='w-[1920px] max-w-[100%] mx-auto mt-[70.88px] 1362px:!bg-none'
       style={divStyle} 
       >
        <article {...props} className={classNameTw}>
          {children}
        </article>
      </div>
    </div>
  );
}
