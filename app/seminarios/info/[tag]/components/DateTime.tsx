import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { twMerge } from 'tailwind-merge';

export default function DateTime({className}:{className:string}) 
{
  return (
    <div className={twMerge("flex px-[2rem] py-[.8rem] 1250px:py-[.3rem] 1250px:px-[.8rem] border-[3px] border-myBlue5 rounded-[.6rem] gap-[.5rem] justify-between 1250px:!text-[14px] 500px:gap-[.3rem] bg-white 1250px:hidden",className)}>
      <div className="flex items-center gap-[1rem] 500px:gap-[.5rem]">
        <FontAwesomeIcon icon={faCalendar}className='text-myBlue5'  />
        <span className="flex flex-col flex-1">
          <span className="font-bold block">Fecha:</span>
          <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis block max-w-[165px]">jueves 24 de setiembre fasdfdf asdf sdaf sdf sdf sdaf sadf s</span>
        </span>
      </div>
      <div className="flex items-center gap-[1rem] 500px:gap-[.5rem]">
        <FontAwesomeIcon icon={faClock} className='text-myBlue5' />
        <span className="flex flex-col font-bold flex-1">
          <span className="font-bold block">Hora:</span>
          <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis block">20:00 PM</span>
        </span>
      </div>
    </div>
  );
}
