import React, { ReactNode,HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props extends HtmlHTMLAttributes<HTMLElement>
{
  children:ReactNode
  bgUrl?:string|false
  bg?:boolean
}

export default function HeroBanner(myProps: props) 
{
  const{
    className,
    children,
    bgUrl="/img/fondoInhouse.png",
    bg=true,
    ...props
  }=myProps

  const classNameTw = twMerge(
    "flex items-start pt-[5rem] w-[65rem] max-w-[100%] mx-auto my-padding pb-[3rem] relative hero:pt-[3rem]",
    className
  );

  return (
    <div
      className={`${bg ? "bg-bg" : "bg-white"}`}
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
     /*   style={{
        backgroundImage: `url(/img/mujer-asiatica-agent.webp)`,
        backgroundSize: "contain",
        backgroundPositionX:"right",
        backgroundRepeat: "no-repeat",
      }} */
       >
        <article {...props} className={classNameTw}>
          {children}
        </article>
      </div>
    </div>
  );
}
