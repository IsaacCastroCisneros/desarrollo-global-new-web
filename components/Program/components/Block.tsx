import React,{ReactNode} from 'react'

interface props
{
  children:ReactNode
  title:string
  subtitle:string|ReactNode
}

export default function Block({children,title,subtitle}:props) 
{
  return (
    <div className='mb-[3.7rem]'>
      <h2 className="mb-[.6rem] text-center">{title}</h2>
      <p className="font-medium mb-[2rem] text-center text-primary max-w-[602px] block mx-auto">
        {subtitle}
      </p>
      {children}
    </div>
  );
}
