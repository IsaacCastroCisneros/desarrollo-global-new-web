import Block from '@/components/Block/Block'
import React from 'react'
import Box from './components/Box'
import boxes from './util/boxes'

export default function PorQueElegirUnCursoInhouse() 
{
  return (
    <Block
      title='Por qué elegir un curso In House'
      styles={{section:'w-[55rem]'}}
      subtitle='Los cursos In House se pueden personalizar para satisfacer las necesidades únicas de su empresa y su personal.'
      inverted
      >
      <div className='grid grid-cols-[repeat(auto-fill,minmax(377px,1fr))] gap-[1rem] 700px:grid-cols-[repeat(auto-fill,minmax(13rem,1fr))]'>
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
