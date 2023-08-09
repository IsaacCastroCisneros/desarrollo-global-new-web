import React from 'react'
import Timer from '../Timer/Timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import Teacher from './components/Teacher';

export default function Detalle() 
{
  return (
    <div>
      <article className="custom-container2 pt-[1rem] flex justify-start">
        <section>
          <Timer />
          <div className="flex px-[2rem] py-[.8rem] border-[3px] border-myBlue5 rounded-[.6rem] gap-[.5rem] justify-between">
            <div className="flex items-center gap-[1rem]">
              <FontAwesomeIcon
                size="xl"
                icon={faCalendar}
                className="text-myBlue5"
              />
              <span className="flex flex-col">
                <span className="font-bold">Fecha:</span>
                <span className="font-medium">jueves 24 de setiembre</span>
              </span>
            </div>
            <div className="flex items-center gap-[1rem]">
              <FontAwesomeIcon
                size="xl"
                icon={faClock}
                className="text-myBlue5"
              />
              <span className="flex flex-col font-bold">
                <span className="font-bold">Hora:</span>
                <span className="font-medium">7:00 PM</span>
              </span>
            </div>
          </div>
          <Teacher container={{className:"1250px:hidden"}} />
        </section>
      </article>
    </div>
  );
}

