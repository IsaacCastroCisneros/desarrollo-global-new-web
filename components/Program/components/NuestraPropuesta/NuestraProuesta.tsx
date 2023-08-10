import React from 'react'
import boxes from './util/boxes'
import Box from './components/Box'

export default function NuestraProuesta() 
{
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-[1rem]'>
       {
         boxes.map((box,pos)=>
         (
           <Box key={pos} {...box}/>
         ))
       }
    </div>
  )
}
