import React,{ReactNode} from 'react'

interface props
{
    children:ReactNode
    title:string
    subtitle:string
}

export default function Block({children,title,subtitle}:props) 
{
  return (
    <div>
      <article className="py-[4rem] my-padding">
        <h2 className='text-primary font-bold text-[45px] block text-center mb-[1rem] capitalize' >{title}</h2>
        <p className='text-[22px] block text-center capitalize'>{subtitle}</p>
        {children}
      </article>
    </div>
  );
}
