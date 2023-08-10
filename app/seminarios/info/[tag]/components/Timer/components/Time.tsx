import React from 'react'

interface props {
  time: string;
  label: string;
}

export default function Time({time,label}:props)
{
  return (
    <span className="flex items-end gap-[.2rem]">
      <span className="leading-[1.2rem] 500px:leading-[.9rem] text-[22px] 500px:text-[15px]">{time}</span>
      <span className="text-[.7rem] 500px:text-[11px]">{label}</span>
    </span>
  );
}
