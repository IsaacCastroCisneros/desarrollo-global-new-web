import React,{ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
  upperTitle:string
  title:ReactNode
  subtitle:ReactNode|string
  className?:string
  styles?:{title?:string,subtitle?:string,upperTitle?:string}
}

export default function HeroLeftBox(props:props) 
{
  const
  {
    upperTitle,
    title,
    subtitle,
    className,
    styles={title:"",subtitle:"",upperTitle:""}
  }=props

  const {
    title: customTitle,
    subtitle: customSubtitle,
    upperTitle: customUpperTitle,
  } = styles;

  return (
    <section
      className={twMerge(`text-[45px] flex-[1.2] flex flex-col justify-start items-start z-[9] relative pt-[2rem] 1300px:pt-0 pr-[1.3rem] 1300px:pr-[0]`, className)}
    >
      <strong
        className={twMerge(
          "relative uppercase hero-uppertitle pl-[1rem] pr-[2rem] py-[.3rem] rounded-[0px_1.5rem_0px_0px] bg-primary text-[#fff] inline-block mb-[1rem]",
          customUpperTitle
        )}
      >
        {upperTitle}
      </strong>
      <h1
        className={twMerge(
          "text-primary relative text-[45px] font-bold flex flex-col leading-[2.3rem] mb-[.4rem] hero-response:p-0 hero-response:text-center",
          customTitle
        )}
      >
        {title}
      </h1>
      {typeof subtitle === "string" && (
        <p
          className={twMerge(
            "text-[24px] hero-response:text-center text-myBlue2 font-medium",
            customSubtitle
          )}
        >
          {subtitle}
        </p>
      )}
      {typeof subtitle !== "string" && subtitle}
    </section>
  );
}
