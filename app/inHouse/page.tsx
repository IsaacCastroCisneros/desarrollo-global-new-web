import React from 'react'
import Hero from './components/Hero/Hero'
import StripeInHouse from './components/StripeInHouse'
import CatalogoDeProgramas from './components/CatalogoDeProgramas/CatalogoDeProgramas'
import PorQueElegirUnCursoInhouse from './components/PorQueElegirUnCursoInhouse/PorQueElegirUnCursoInhouse'

export default function page() {
  return(
    <>
      <Hero/>
      <StripeInHouse/>
      <CatalogoDeProgramas/>
      <PorQueElegirUnCursoInhouse/>
      <DescubraComoPodemosAyudarle/>
    </>
  )
}
