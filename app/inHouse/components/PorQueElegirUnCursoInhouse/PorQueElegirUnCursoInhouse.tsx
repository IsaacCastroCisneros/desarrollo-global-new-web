import Block from '@/components/Block/Block'
import React from 'react'
import Box from './components/Box'
import boxes from './util/boxes'

export default function PorQueElegirUnCursoInhouse() 
{
  return (
    <Block
      title='Por qué elegir un curso In House'
      subtitle='Los cursos In House se pueden personalizar para satisfacer las necesidades únicas de su empresa y su personal.'
      inverted
      >
      <div className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-[1rem] mt-[5rem]'>
        {
            boxes.map((box,pos)=>
            (
              <Box key={pos} {...box} />
            ))
        }
      </div>
    </Block>
  )
}
