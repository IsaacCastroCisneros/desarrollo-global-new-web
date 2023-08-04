"use client"

import Block from '@/components/Block/Block'
import MySlider from '@/components/MySlider/MySlider'
import React from 'react'
import Box from './components/Box'

export default function OpinionesDeNuestros() {
  return (
    <Block
      withSlick
      title="Opiniones de nuestros alumnos"
      subtitle="Alumnos satisfechos"
      styles={{ div: "bg-bg" }}
    >
      <MySlider
        mySettings={{
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode:true
              }
            },
            {
              breakpoint: 1260,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ],
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </MySlider>
    </Block>
  );
}
