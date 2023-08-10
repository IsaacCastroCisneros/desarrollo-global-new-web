import React from 'react'
import Time from './components/Time';
import { twMerge } from 'tailwind-merge';

export default function Timer({className}:{className:string}) 
{
  return (
    <div
      className={twMerge(
        "py-[.8rem] px-[1.3rem] 1250px:px-[.8rem] rounded-[.8rem] bg-myRed2 flex items-center gap-[1rem] mb-[1rem] 500px:px-[.6rem] 500px:gap-[.3rem]",
        className
      )}
    >
      <span className="font-bold text-[18px] 1250px:text-[16px] 500px:text-[13px]">Inicia en:</span>
      <div className="flex text-[25px] text-my items-center text-myRed3 font-bold gap-[.5rem] justify-center 500px:gap-[.2rem]">
        <Time time="03" label="Dias" />
        <Time time="03" label="Horas" />
        <Time time="03" label="Minutos" />
        <Time time="03" label="Segundos" />
      </div>
    </div>
  );
}
