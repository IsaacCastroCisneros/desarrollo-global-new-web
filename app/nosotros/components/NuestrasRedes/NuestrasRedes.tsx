import Block from '@/components/Block/Block'
import React from 'react'
import boxes from './util/boxes'
import Box from './components/Box'

export default function NuestrasRedes() {
  return (
    <Block title='Nuestras Redes' styles={{section:"w-[55rem]"}} >
       <div className='grid gap-[4rem] grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] 700px:grid-cols-[repeat(auto-fill,minmax(274px,1fr))]'>
        {
          boxes.map((box,pos)=>
          (
            <Box {...box} key={pos}/>
          ))
        }
       </div>
    </Block>
  )
}
