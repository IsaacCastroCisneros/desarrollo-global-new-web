
import React from 'react'
import boxes from '../interfaces/box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Box(props:boxes) 
{
  const
  {
    title,
    description,
    icon,
    num
  }=props

  return (
    <div className="bg-myBlue6 text-[#fff] rounded-[.5rem] flex px-[1rem] py-[.7rem] gap-[.6rem] hover:bg-myYellow2 hover:text-myBlue6">
      <section className="flex flex-col w-[3rem] items-center relative justify-between">
        <div className="w-fit">
          <FontAwesomeIcon icon={icon} size="2xl" className="mt-[.3rem]" />
        </div>
        <span className="font-bold text-[7rem] text-white opacity-[.2] bottom-0 leading-[6rem]">
          {num}
        </span>
      </section>
      <section className="flex-1 flex flex-col gap-[.5rem]">
        <span className="text-[22px] font-bold ">{title}</span>
        <p className="text-[14px] leading-[1rem]">{description}</p>
      </section>
    </div>
  );
}
