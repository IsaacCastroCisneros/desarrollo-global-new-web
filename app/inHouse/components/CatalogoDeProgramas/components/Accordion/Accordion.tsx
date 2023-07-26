import { faTableList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Item from './components/Item'
import currentAccordion from './interfaces/currentAccordion'

interface props
{
    label:string
    id:number
    active:currentAccordion
    items:Array<string>
    setActive:Dispatch<SetStateAction<currentAccordion>>
}

export default function Accordion(props:props) 
{
  const
  {
    label,
    id,
    active,
    items,
    setActive
  }=props

  const isActive = (id===active.current)&&active.show 

  function isShow()
  {
    if(id===active.current)return !active.show
    return true
  }

  return (
    <div className='w-[100%] rounded-[.5rem] overflow-hidden border-[4px] border-primary'>
      <button
        className={`py-[.6rem] px-[1.5rem] flex gap-[1rem]  items-center w-[100%] border-primary ${isActive ? 'border-b-[4px]':''}`} 
        onClick={() => setActive({current:id,show:isShow()})}
      >
        <span className='1000px:text-[.5rem]'>
          <FontAwesomeIcon size="xl" icon={faTableList} />
        </span>
        <span className="font-bold text-[30px] 1000px:text-[20px] 700px:text-[15px] text-left">{label}</span>
      </button>
      {isActive && (
        <ul className='p-[2rem] 700px:p-[.7rem] border-[4px] flex flex-col gap-[.5rem]'>
          {items.map((item, pos) => (
            <Item key={pos} label={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
