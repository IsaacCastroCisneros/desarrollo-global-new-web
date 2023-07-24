import React from 'react'
import MenuButton from './components/MenuButton'
import menuButtons from './util/menuButtons'

export default function MenuBar() 
{
  return (
    <ul className='flex justify-center flex-wrap 700px:flex-col items-center my-[2rem]'>
      {
        menuButtons.map((menuButton,pos)=>
          (
             <MenuButton key={pos} {...menuButton} />
          ))
      }
    </ul>
  )
}
