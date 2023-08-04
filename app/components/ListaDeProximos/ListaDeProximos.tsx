"use client"

import React,{useEffect, useState} from 'react'
import Block from '@/components/Block/Block'
import Card from '@/components/Card/Card';
import MenuBar from './components/MenuBar/MenuBar';
import get from '@/util/get';
import program from '@/types/programas';
import DGurl from '@/types/DGurl';
import MySlider from '@/components/MySlider/MySlider';

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

  return (
    <Block
      title="Lista de Próximos inicios"
      withSlick
      styles={{section:'1500px:px-0'}} 
      subtitle={`"¡Mantente al tanto de nuestros próximos inicios y no te pierdas la oportunidad de formarte con los mejores!"`}
    >
      <MenuBar handleGetProgramas={handleGetProgramas} />
      <div className="1500px:hidden">
        <MySlider>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </MySlider>
      </div>
      <div className="1500px:grid hidden grid-cols-[repeat(auto-fill,minmax(385px,1fr))] 500px:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[1rem]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Block>
  );
}
