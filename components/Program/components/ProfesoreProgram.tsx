"use client"

import MySlider from '@/components/MySlider/MySlider'
import ProfesorCard from '@/components/ProfesorCard/ProfesorCard'
import React from 'react'
import Slider from 'react-slick';

export default function ProfesoreProgram() 
{
  return (
    <div className="text-center text-primary">
      <h2 className="mb-[.6rem]">Docentes</h2>
      <p className="font-medium mb-[2rem]">
        Profesionales con amplia experiencia en la Gestión Pública
      </p>
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
    </div>
  );
}
