import React from 'react'
import box from '../interfaces/box';

export default function Box({title,description}:box) 
{
  return (
    <div className="bg-[#fff] py-[1rem] px-[1.6rem] rounded-[.5rem] min-h-[313px] 840px:text-center 840px:min-h-[240px]">
      <strong className='text-[30px] text-primary capitalize block mb-[.8rem] 700px:text-center leading-[1.7rem]'>
        {
          title
        }
      </strong>
      <p className='text-[22px]'>
        {
          description
        }
      </p>
    </div>
  );
}
