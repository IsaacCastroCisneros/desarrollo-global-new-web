"use client"

import React,{useEffect, useState} from 'react'
import Block from '@/components/Block/Block'
import Card from '@/components/Card/Card';
import MenuBar from './components/MenuBar/MenuBar';
import Slider from "react-slick";
import get from '@/util/get';
import program from '@/types/programas';
import DGurl from '@/types/DGurl';

export default function ListaDeProximos() 
{
  const[programas,setProgramas]=useState<Array<program>>([])

  async function handleGetProgramas(type:DGurl):Promise<void>
  {
    const { data } = await get(type);
    
    if(type==="inHouse")
    {
      setProgramas(data as Array<inHouse>)
      return
    }

    const { envivo } = data;
    setProgramas(envivo as Array<program>);
  }

  useEffect(()=>
  {
    handleGetProgramas('cursos')
  },[])

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
      <MenuBar handleGetProgramas={handleGetProgramas}/>
      <Slider {...settings}>
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
