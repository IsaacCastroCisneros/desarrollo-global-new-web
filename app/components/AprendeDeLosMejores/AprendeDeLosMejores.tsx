"use client"

import Block from '@/components/Block/Block'
import MySlider from '@/components/MySlider/MySlider'
import ProfesorCard from '@/components/ProfesorCard/ProfesorCard'
import React from 'react'

export default function AprendeDeLosMejores() 
{
  return (
    <Block
      withSlick
      inverted
      title="Aprende de los mejores docentes"
      subtitle="Aprende de la mano con expertos y alcanza tus metas profesionales."
    >
      <MySlider>
        <ProfesorCard />
        <ProfesorCard />
        <ProfesorCard />
        <ProfesorCard />
        <ProfesorCard />
        <ProfesorCard />
        <ProfesorCard />
      </MySlider>
    </Block>
  );
}
