import Block from '@/components/Block/Block'
import React from 'react'
import boxes from './util/boxes';
import Box from './components/Box';

export default function Hablemos() 
{
  return (
    <Block
      title="¡Hablemos! Estamos aquí para ayudarte en lo que necesites."
      styles={{article:"!pb-0",h2:"text-[35px]"}}
      inverted
    >
      <div className="relative h-[7rem] flex-wrap max-w-[1300px] mx-auto">
        <div className="gap-[1rem] w-[100%] absolute top-[100%] translate-y-[-50%] left-0 flex 1500px:flex-col 1500px:translate-y-[-16%]">
            {
                boxes.map((box,pos)=>
                (
                    <Box {...box} key={pos} />
                ))
            }
        </div>
      </div>
    </Block>
  );
}
