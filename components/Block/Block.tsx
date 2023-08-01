import React,{ReactNode} from 'react'

interface props
{
    children:ReactNode
    title:string
    subtitle?:string
    inverted?:boolean
}

export default function Block(props:props) 
{
  const
  {
    children,
    title,
    subtitle,
    inverted=false
  }=props

  return (
    <div className={`${inverted ? "bg-primary" : ""}`}>
      <article className="py-[4rem] 700px:py-[2rem] my-padding">
        <h2
          className={`${
            inverted ? "text-[#fff]" : "text-primary"
          } font-bold text-[45px] block text-center mb-[1rem] capitalize`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`${
              inverted ? "text-[#fff]" : "text-primary"
            } text-[22px] block text-center capitalize max-w-[1000px] mx-auto`}
          >
            {subtitle}
          </p>
        )}
        <section className="block-container mt-[3rem] 700px:mt-[1.8rem]">
          {children}
        </section>
      </article>
    </div>
  );
}