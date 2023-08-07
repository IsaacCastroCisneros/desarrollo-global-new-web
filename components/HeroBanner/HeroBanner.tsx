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
    bgUrl="/img/fondoInhouse.webp",
    bg=true,
    divStyle,
    styles={container:""},
    isLayer=true,
    ...props
  }=myProps

  const classNameTw = twMerge(
    "flex items-start pt-[3.7rem] custom-container2 hero:pt-[3rem] 1300px:gap-[1rem] h-[759px] 1300px:h-[initial] 1300px:pb-[3rem]",
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
