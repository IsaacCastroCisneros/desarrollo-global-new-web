import React from 'react'
import Time from './components/Time';

export default function Timer() 
{
  return (
    <div className="py-[.8rem] px-[1.3rem] rounded-[.8rem] bg-myRed2 flex items-center gap-[1rem] mb-[1rem]">
      <span className="font-bold text-[18px]">Inicia en:</span>
      <div className="flex text-[25px] text-my items-center text-myRed3 font-bold gap-[1.4rem]">
        <Time time="03" label="Dias" />
        <Time time="03" label="Horas" />
        <Time time="03" label="Minutos" />
        <Time time="03" label="Segundos" />
      </div>
    </div>
  );
}
