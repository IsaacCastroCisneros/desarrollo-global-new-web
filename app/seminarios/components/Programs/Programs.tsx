import React from 'react'
import MenuBar from './components/MenuBar/MenuBar'
import Card from './components/Card/Card'

export default function Programs() 
{
  return (
    <div className='w-[1292px] max-w-[100%] pt-[2rem] mx-auto'>
       <MenuBar/>
       <div className='mt-[5rem] grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[2rem] 1300px:grid-cols-[repeat(auto-fill,minmax(308px,1fr))]'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
       </div>
    </div>
  )
}
