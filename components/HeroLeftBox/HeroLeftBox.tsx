import React,{ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
  upperTitle:string
  title:ReactNode
  subtitle:ReactNode|string
  className?:string
}

export default function HeroLeftBox(props:props) 
{
  const
  {
    upperTitle,
    title,
    subtitle,
    className,
  }=props

  return (
    <section className={twMerge(`text-[45px] flex-[1.2] z-[9] relative`,className)}>
      <strong className=" relative 
      uppercase hero-uppertitle pl-[1rem] pr-[2rem] py-[.3rem] rounded-[0px_1.5rem_0px_0px] bg-primary text-[#fff] inline-block mb-[1rem]">
        {upperTitle}
      </strong>
      <h1 className=" text-primary relative font-bold flex flex-col leading-[2.5rem] mb-[1rem] pr-[3rem] hero-response:p-0 hero-response:text-center">
        {title}
      </h1>
      {typeof subtitle === "string" && (
        <p className="text-[24px] hero-response:text-center">{subtitle}</p>
      )}
      {
        typeof subtitle !== "string" &&
        subtitle
      }
    </section>
  );
}
