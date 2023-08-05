import React from 'react'
import boxes from '../../util/boxes'
import Box from './components/Box'
import { twMerge } from 'tailwind-merge'


export default function Boxes({styles=""}:{styles?:string}) 
{
  return (
    <div className={twMerge("flex justify-center w-[100%] left-0",styles)}>
        <div className="flex gap-[1rem] px-[1rem] 1362px:flex-col">
          {boxes.map((box, pos) => (
            <Box {...box} key={pos} />
          ))}
        </div>
    </div>
  )
}
