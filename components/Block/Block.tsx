import React,{ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
    children:ReactNode
    title?:string
    subtitle?:string
    inverted?:boolean
    withSlick?:boolean
    styles?:{div?:string,section?:string,article?:string,p?:string,h2?:string}
}

export default function Block(props:props) 
{
  const
  {
    children,
    title,
    subtitle,
    inverted=false,
    withSlick=false,
    styles={div:"",section:"",article:"",p:"",h2:""}
  }=props

  const isSlick=  withSlick ? ' w-[79rem] px-[3rem] 500px:px-0':''
  const
  {
    div,
    section,
    article,
    p,
    h2
  }=styles

  return (
    <div className={twMerge(`${inverted ? "bg-primary" : ""}`,div)}>
      <article className={twMerge("py-[4rem] 700px:py-[2rem] my-padding",article)}>
        {title && (
          <h2
            className={twMerge(`${
              inverted ? "text-[#fff]" : "text-primary"
            } font-bold text-[45px] block text-center mb-[1rem] capitalize`,h2) }
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={twMerge(`${
              inverted ? "text-[#fff]" : "text-[#000]"
            } text-[22px] block text-center capitalize max-w-[1000px] mx-auto font-medium`,p)}
          >
            {subtitle}
          </p>
        )}
        <section
          className={twMerge(
            "mx-auto max-w-[100%] w-[64rem] mt-[3rem] 700px:mt-[1.8rem]",
            section + isSlick
          )}
        >
          {children}
        </section>
      </article>
    </div>
  );
}
