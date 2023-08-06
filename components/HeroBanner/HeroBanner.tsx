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
    "flex items-start pt-[5rem] w-[1340px] max-w-[100%] mx-auto my-padding pb-[3rem] relative hero:pt-[3rem]",
    className
  );

  const{container}=styles

  console.log(container)

  return (
    <div
      className={twMerge(`relative`,container)}
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
      {isLayer && (
        <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-stretch">
          <Layer
            style={{
              backgroundImage: "linear-gradient(to right, #c7cefc , #fff)",
            }}
          />
          <Layer className="bg-[#fff]" />
        </div>
      )}
      <div
        className="w-[1920px] relative max-w-[100%] mx-auto mt-[70.88px] 1362px:!bg-none"
        style={divStyle}
      >
        <article {...props} className={classNameTw}>
          {children}
        </article>
      </div>
    </div>
  );
}

function Layer({className,...props}:HtmlHTMLAttributes<HTMLElement>)
{
  return (
    <div
      {...props}
      className={twMerge(
        "flex-1 opacity-[.6]",
        className
      )}
    ></div>
  );
}