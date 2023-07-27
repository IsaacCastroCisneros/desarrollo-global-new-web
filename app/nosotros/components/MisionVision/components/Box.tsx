import React from 'react'

interface props
{
    title:string,
    description:string
}

export default function Box({title,description}:props) 
{
  return (
    <div className='p-[1rem] bg-bg max-w-[350px] min-w-[300px] 700px:text-center'>
      <strong className='mb-[.6rem] block text-primary'>{title}</strong>
      <p className='text-[18px]'>
        {
            description
        }
      </p>
    </div>
  )
}
