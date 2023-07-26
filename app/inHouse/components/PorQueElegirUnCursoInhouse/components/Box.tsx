import React from 'react'
import box from '../interfaces/box';

export default function Box({title,description}:box) 
{
  return (
    <div className="bg-[#fff] p-[1.6rem] rounded-[.5rem]">
      <strong className='text-[30px] text-primary capitalize block mb-[.8rem] 700px:text-center'>
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
