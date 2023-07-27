import React from 'react'
import Hero from './components/Hero'
import Stripe from '@/components/Stripe/Stripe'
import NuestraHistoria from './components/NuestraHistoria'
import MisionVison from './components/MisionVision/MisionVison'
import NuestraCultura from './components/NuestraCultura/NuestraCultura'
import NuestrasRedes from './components/NuestrasRedes/NuestrasRedes'

export default function page() 
{
  return (
    <>
      <Hero/>
      <Stripe/>
      <NuestraHistoria/>
      <MisionVison/>
      <NuestraCultura/>
      <NuestrasRedes/>
    </>
  )
}
