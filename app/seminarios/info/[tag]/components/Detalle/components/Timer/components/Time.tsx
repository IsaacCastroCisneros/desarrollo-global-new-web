import React from 'react'

interface props {
  time: string;
  label: string;
}

export default function Time({time,label}:props)
{
  return (
    <span className="flex items-end gap-[.2rem]">
      <span className="leading-[1.4rem]">{time}</span>
      <span className="text-[.7rem]">{label}</span>
    </span>
  );
}
