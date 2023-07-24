import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Item({label}:{label:string}) 
{
  return (
    <li className="flex gap-[1rem] items-center">
      <span className='700px:text-[.5rem]'>
      <FontAwesomeIcon icon={faCheckCircle} className="text-myGreen" />
      </span>
      <p className='text-[22px]'>{label}</p>
    </li>
  );
}
