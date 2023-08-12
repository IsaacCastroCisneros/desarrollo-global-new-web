import Block from '@/components/Block/Block'
import Image from 'next/image';
import React from 'react'
import Buttons from '../Buttons/Buttons';

export default function DescubraComoPodemosAyudarle() 
{
  return (
    <Block
      title="Descubra como podemos ayudarle"
      styles={{ section: "mt-[0] 1450px:mt-[3rem]" }}
      subtitle="Solicite una propuesta personalizada sin compromiso y dé el primer paso hacia el éxito de su proyecto."
    >
      <div className="relative flex 1450px:justify-center">
        <Image
          src="/img/descubrachica.webp"
          alt="chica sosteniendo una laptop"
          className="1450px:hidden w-[calc(1278px_-_160px)] h-[calc(852px_-_160px)]"
          width={1278-160}
          height={852-160}
        />
        <Buttons
          styles={{
            section:
              "1450px:relative 1450px:w-[100%] flex-col gap-[3rem] absolute right-0 top-[50%] translate-y-[-50%] 1450px:top-[0] 1450px:translate-y-[0] flex-1",
          }}
        />
      </div>
    </Block>
  );
}
