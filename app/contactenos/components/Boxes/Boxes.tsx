import React from 'react'
import boxes from '../../util/boxes'
import Box from './components/Box'
import { twMerge } from 'tailwind-merge'


export default function Boxes({styles=""}:{styles?:string}) 
{
  return (
    <div className={twMerge("flex justify-center left-0 w-[100%]",styles)}>
        <div className="flex gap-[1rem] px-[1rem] custom-container2 1362px:flex-col">
          {boxes.map((box, pos) => (
            <Box {...box} key={pos} />
          ))}
        </div>
    </div>
  )
}
