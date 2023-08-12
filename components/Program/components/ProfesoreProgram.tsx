"use client"

import MySlider from '@/components/MySlider/MySlider'
import ProfesorCard from '@/components/ProfesorCard/ProfesorCard'
import React from 'react'
import Block from './Block';

export default function ProfesoreProgram() 
{
  return (
    <Block
     title='Docentes'
     subtitle='Profesionales con amplia experiencia en la Gestión Pública'
     >
       <MySlider
        arrowStyles='1736px:hidden'
        mySettings={{
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
          responsive: [
            {
              breakpoint: 1588,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,
              },
            },
            {
              breakpoint: 902,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
          ],
        }}
      >
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
        <ProfesorCard
          styles={{
            cardBody: "bg-[#fff] text-[#000]",
            container: "my-shadow2",
          }}
        />
      </MySlider>
    </Block>
  );
}
