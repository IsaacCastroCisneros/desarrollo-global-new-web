import { faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Option from './components/Option';

export default function MenuBar() 
{
  return (
    <div className="flex rounded-[5rem] overflow-hidden 1300px:flex-col 1300px:rounded-[0] 1300px:gap-[1rem]">
      <Option label='Próximos Seminarios' icon={faClock} isActive/>
      <Option label='Seminarios Realizados' icon={faCheckCircle} className='justify-start' isActive={false}/>
    </div>
  );
}
