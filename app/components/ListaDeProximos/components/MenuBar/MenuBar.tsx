import React from 'react'
import MenuButton from './components/MenuButton'
import menuButtons from './util/menuButtons'
import DGurl from '@/types/DGurl'

interface props
{
  handleGetProgramas:(type:DGurl)=>Promise<any> 
}

export default function MenuBar({handleGetProgramas}:props) 
{
  return (
    <ul className='flex justify-center flex-wrap 700px:flex-col items-center my-[2rem]'>
      {
        menuButtons.map((menuButton,pos)=>
          (
             <MenuButton handleGetProgramas={handleGetProgramas} key={pos} {...menuButton} />
          ))
      }
    </ul>
  )
}
