import React, { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

interface props
{
  container?:HtmlHTMLAttributes<HTMLElement>
  img?:HtmlHTMLAttributes<HTMLElement>
  title?:HtmlHTMLAttributes<HTMLElement>
  subtitle?:HtmlHTMLAttributes<HTMLElement>
}

export default function Teacher(props:props) 
{
  const
  {
    container={},
    img={},
    title={},
    subtitle={}
  }=props

  const{className:containerClassName,...containerProps}=container
  const{className:imgClassName,...imgProps}=img
  const{className:titleClassName,...titleProps}=title
  const{className:subtitleClassName,...subtitleProps}=subtitle

  return (
    <div {...containerProps} className={twMerge("flex gap-[1rem] items-center mt-[1rem]",containerClassName)}>
      <div {...imgProps} className={twMerge("w-[145px] h-[145px] rounded-[100%] bg-myGray3",imgClassName)}></div>
      <section>
        <span {...titleProps} className={twMerge("font-bold text-[27px]",titleClassName)}>Capacitador</span>
        <p {...subtitleProps} className={twMerge("font-bold text-[23px]",subtitleClassName)}>Eco. Eduardo Ulloa</p>
        <button className="hover:underline font-medium">Ver CV</button>
      </section>
    </div>
  );
}
