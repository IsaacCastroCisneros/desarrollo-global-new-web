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
      <MySlider mySettings={{ slidesToShow: 3, slidesToScroll: 3,responsive:[],centerMode:false }}>
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
        <ProfesorCard styles={{cardBody:"bg-[#fff] text-[#000]",container:"my-shadow2"}} />
      </MySlider>
    </div>
  );
}
