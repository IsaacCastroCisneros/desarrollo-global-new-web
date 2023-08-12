import React,{ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
    bgUrl:string
    leftContent:ReactNode
    riteContent:ReactNode
    styles?:{leftContent:string}
}

export default function BlockNosotros(props:props) 
{
  const 
  { 
    bgUrl,
    leftContent, 
    riteContent, 
    styles={leftContent:""}
  } = props;

  return (
    <div className='bg-white overflow-hidden'>
      <div
        className="custom-container flex 1450px:!bg-none overflow-hidden"
        style={{
          backgroundImage:`url(${bgUrl})` ,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "auto",
        }}
      >
        <article className="custom-container2 flex 1450px:flex-col 700px:text-center">
          <section className={twMerge("flex-[2] pt-[5.5rem] pb-[6.5rem] 700px:py-[2rem] bg-transparent bg-gradient-to-r from-white from-[64%] to-100%",styles.leftContent)} >
            {leftContent}
          </section>
          <section className="flex-1">
            {riteContent}
          </section>
        </article>
      </div>
    </div>
  );
}
