import React,{ReactNode} from 'react'

export default function BlockProgram({children}:{children:ReactNode}) 
{
  return (
    <div className="w-[65rem] mx-auto flex justify-start max-w-[100%] px-[1rem]">
        <section className="w-[40rem] max-w-[100%] text-[#fff] relative">
          {children}
        </section>
    </div>
  )
}
