import React from 'react'
import Timer from './Timer/Timer'
import Teacher from './Teacher';
import DateTime from './DateTime';

export default function Detalle() 
{
  return (
    <div style=
    {
      { 
        /* backgroundImage: "url(/img/fondoInhouse.webp)",
        backgroundSize:"cover" */
      }}>
      <article className="custom-container2 pt-[1rem] flex justify-start">
        <section>
          <Timer className=" 1250px:hidden" />
          <DateTime className="1250px:hidden" />
          <Teacher container={{ className: "1250px:hidden" }} />
        </section>
      </article>
    </div>
  );
}

