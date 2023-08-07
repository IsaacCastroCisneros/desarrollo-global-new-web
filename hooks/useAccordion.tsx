import React,{useState} from 'react'

export default function useAccordion() 
{
  const [active, setActive] = useState<{
    current: number;
    show: boolean;
  }>({ current: 0, show: true });

  function handleUpdating(id:number,current:number):void
  {
    setActive({current:id,show:handleIsShow(id,current)})
  }
  
  function handleIsActive(id:number):boolean
  {
    return (id===active.current)&&active.show 
  }

  function handleIsShow(id:number,current:number):boolean
  {
    if(id===current)return !active.show
    return true
  }

  return{
    handleUpdating,
    current:active.current,
    handleIsActive,
  }
}
