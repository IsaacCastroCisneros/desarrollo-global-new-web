import accordionHook from '@/interfaces/accordionHook'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface props extends accordionHook
{
  
}

export default function AccordionCurso(props:props) 
{
  const
  {
    handleUpdating,
    current,
    id,
    handleIsActive
  }=props

  const isActive = handleIsActive(id)

  return (
    <div className='border-[1px] border-myGray5 rounded-[.4rem] overflow-hidden'>
      <button
        className="font-bold items-center gap-[1rem] px-[2rem] py-[.8rem] bg-myGray4 flex text-[#000] w-[100%] outline-none"
        onClick={() => handleUpdating(id, current)}
      >
        <FontAwesomeIcon icon={faChevronDown} />
        Sesion 01
      </button>
      {isActive && (
        <div className='text-[14px] text-[#000] px-[1.6rem] py-[1rem]'>
          • Alcances y últimas modificaciones a la nueva Ley de Contrataciones
          del Estado N° 30225 establecidas en el D.S. N° 1444-2018 y el Texto
          Único Ordenado el D.S. N° 082-2019.<br></br>
          • El nuevo reglamento DS. N°
          344-2018-EF y sus últimas modificaciones
        </div>
      )}
    </div>
  );
}
