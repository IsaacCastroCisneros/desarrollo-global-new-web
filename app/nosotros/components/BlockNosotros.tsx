import React,{ReactNode} from 'react'

interface props
{
    bgUrl:string
    leftContent:ReactNode
    riteContent:ReactNode
}

export default function BlockNosotros({bgUrl,leftContent,riteContent}:props) 
{
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
        <article className="block-container flex 1450px:flex-col 700px:text-center">
          <section className="flex-1 pt-[4rem] pb-[2.5rem] 700px:py-[2rem] bg-transparent bg-gradient-to-r from-white to-transparent from-[77%] to-100%">
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
