import { faTableList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Item from './components/Item'
import accordionHook from '@/interfaces/accordionHook'

interface props extends accordionHook
{
    label:string
    id:number
    items:Array<string>
}

export default function Accordion(props:props) 
{
  const
  {
    label,
    id,
    items,
    handleIsActive,
    handleUpdating,
    current
  }=props

  const isActive= handleIsActive(id)

  return (
    <div className='w-[100%] rounded-[.5rem] overflow-hidden border-[4px] border-primary'>
      <button
        className={`py-[.6rem] px-[1.5rem] flex gap-[1rem]  items-center w-[100%] border-primary ${isActive ? 'border-b-[4px]':''}`} 
        onClick={() =>handleUpdating(id,current)}
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
