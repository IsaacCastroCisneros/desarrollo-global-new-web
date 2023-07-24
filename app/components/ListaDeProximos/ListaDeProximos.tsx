"use client"

import React from 'react'
import Block from '@/components/Block/Block'
import Card from '@/components/Card/Card';
import MenuBar from './components/MenuBar/MenuBar';
import Slider from "react-slick";

export default function ListaDeProximos() 
{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:
    [
      {
        breakpoint: 1821,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Block
      title="Lista de Próximos inicios"
      subtitle={`"¡Mantente al tanto de nuestros próximos inicios y no te pierdas la oportunidad de formarte con los mejores!"`}
    >
      <MenuBar/>
      <Slider {...settings} className='max-w-[100%] w-[75rem] mx-auto' >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Slider>
    </Block>
  );
}
