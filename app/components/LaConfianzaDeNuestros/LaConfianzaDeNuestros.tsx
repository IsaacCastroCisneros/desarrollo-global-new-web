"use client"
import MySlider from '@/components/MySlider/MySlider'
import React from 'react'
import boxes from './util/boxes'
import Image from 'next/image'
import Block from '@/components/Block/Block'

export default function LaConfianzaDeNuestros() 
{
  return (
    <Block
      subtitle="La confianza de nuestros clientes es nuestra mayor satisfacción"
      styles={{ p: "text-myGray3 font-medium" }}
      withSlick
    >
     {/*   <MySlider
        mySettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakPoint: 1478,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}
      >
        <div>
          
        </div>
      </MySlider> */}
      <div className="flex justify-around w-[100%] flex-wrap gap-[2rem] 1000px:flex-col 1000px:items-center">
        {boxes.map((box, pos) => (
          <Image
            {...box}
            key={pos}
            alt={box.alt}
            style={{ width: box.width, height: box.height }}
          />
        ))}
      </div>
    </Block>
  );
}
