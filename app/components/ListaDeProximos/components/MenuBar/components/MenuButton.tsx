import React from 'react'
import menuButton from '../interfaces/menuButton'


export default function MenuButton({label,...props}:menuButton) 
{

  return (
    <li>
        <button
         className='hover:bg-primary whitespace-nowrap text-primary hover:text-white bg-transparent px-[1.5rem] py-[.8rem] rounded-[2rem] font-bold capitalize'
         {...props}
         title={label}
         name={label}
         >
         {label}
        </button>
    </li>
  )
}
