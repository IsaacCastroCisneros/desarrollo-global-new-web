import React from 'react'
import menuButton from '../interfaces/menuButton'
import DGurl from '@/types/DGurl'

interface props extends menuButton
{
  handleGetProgramas:(type:DGurl)=>Promise<any> 
}

export default function MenuButton(myProps:props) 
{
  const
  {
    label,
    handleGetProgramas,
    realLabel,
    ...props
  }=myProps

  const labelForReal = realLabel||label

  return (
    <li>
        <button
         className='hover:bg-primary whitespace-nowrap text-primary hover:text-white bg-transparent px-[1.5rem] py-[.8rem] rounded-[2rem] font-bold capitalize'
         {...props}
         title={labelForReal}
         name={labelForReal}
         onClick={()=>
         {
          console.log(label)
          handleGetProgramas(label)
         }}
         >
         {labelForReal}
        </button>
    </li>
  )
}
