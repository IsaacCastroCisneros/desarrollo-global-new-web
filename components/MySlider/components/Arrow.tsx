import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Arrow(props:any)
{ 
  const{onClick,side}=props

  function getIcon():IconProp
  {
    if(side==='left')return faArrowLeft
    return faArrowRight
  }

  const position = side==="left" ? "left-0 translate-x-[-150%]":"right-0 translate-x-[150%]"

  return (
    <button
      className={`absolute w-[2.5rem] h-[2.5rem] rounded-[100%] flex justify-center 500px:hidden items-center  text-primary bg-myGray2 translate-y-[-50%] top-[50%] ${position}`}
      onClick={onClick}
    >
      <FontAwesomeIcon size='lg' icon={getIcon()}/>
    </button>
  );
}
