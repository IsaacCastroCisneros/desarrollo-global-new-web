import React, { ReactNode,HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props extends HtmlHTMLAttributes<HTMLElement>
{
  children:ReactNode
  bgUrl?:string|false
  bg?:boolean
  divStyle?:Record<any,any>
  styles?:{container:string}
  isLayer?:boolean
}

export default function HeroBanner(myProps: props) 
{
  const{
    className,
    children,
    bgUrl="/img/fondoInhouse.png",
    bg=true,
    divStyle,
    styles={container:""},
    isLayer=true,
    ...props
  }=myProps

  const classNameTw = twMerge(
    "flex items-start pt-[4.5rem] custom-container2 pb-[3rem] hero:pt-[3rem]",
    className
  );

  const{container}=styles

  return (
    <div
      className={twMerge(`relative hero-top-margin`, container)}
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
      <div
        className="w-[1920px] relative max-w-[100%] mx-auto 1362px:!bg-none"
        style={divStyle}
      >
        <article {...props} className={classNameTw}>
          {children}
        </article>
      </div>
    </div>
  );
}
