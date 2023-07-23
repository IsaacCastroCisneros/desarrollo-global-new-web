"use client"

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React,{Dispatch,SetStateAction,useEffect} from 'react'
import Item from './components/Item'
import items from './util/items'

interface props
{
  show:boolean,
  setShow:Dispatch<SetStateAction<boolean>>
}

export default function MobMenu({show,setShow}:props) 
{
  useEffect(()=>
  {
    const body = document.querySelector('body') as HTMLElement
    if(show)
    {
      body.style.overflow='hidden'
      return
    }
    body.style.overflow='auto'

  },[show])


  return (
    <>
      <div
        className={`fixed bg-black top-0 left-0 right-0 bottom-0 duration-200 ease-in-out1 ${
          show
            ? "pointers-events-auto opacity-[.8]"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`absolute w-[375px] p-[1rem] bg-[#fff] h-[100vh] top-0 left-0 ${
          show ? "translate-x-[0]" : "translate-x-[-100%]"
        } duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-[1rem]">
          <Image
            src="/img/DG-Logotipo.webp"
            height={54}
            width={220}
            alt="Desarrollo Global"
          />
          <button onClick={() => setShow(false)} name="cerrar menu" title='cerrar menu'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <ul>
          {items.map((item, pos) => (
            <Item key={pos} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
}
