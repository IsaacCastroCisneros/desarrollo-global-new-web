"use client"

import Link from 'next/link'
import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import options from '../util/options'
import option from '../interfaces/option'

interface props extends option
{
  pos:number
}

export default function Option({title,id,icon,pos}:props) 
{
  const noBorder=pos===(options.length-1) 

  return (
    <li className='flex-1'>
       <Link  href={id} className={`flex gap-[.5rem] items-center w-[100%] hover:bg-myBlue4 hover:text-[#fff] py-[1rem] px-[1.5rem] ${noBorder ? '':'border-r-[1px]'}  border-border2`}>
           <FontAwesomeIcon size='2xl' icon={icon} />
           <strong className='text-[16px]'>
             {
               title
             }
           </strong>
       </Link>
    </li>
  )
}
