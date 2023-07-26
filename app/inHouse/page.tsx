import React from 'react'
import Hero from './components/Hero/Hero'
import StripeInHouse from './components/StripeInHouse'
import CatalogoDeProgramas from './components/CatalogoDeProgramas/CatalogoDeProgramas'
import PorQueElegirUnCursoInhouse from './components/PorQueElegirUnCursoInhouse/PorQueElegirUnCursoInhouse'
import DescubraComoPodemosAyudarle from './components/DescubraComoPodemosAyudarle/DescubraComoPodemosAyudarle'
import ExperienciaEducativaDeCalidad from './components/ExperienciaEducativaDeCalidad/ExperienciaEducativaDeCalidad'
import SolicitaUnaCotizacionYaMismo from './components/SolicitaUnaCotizacionYaMismo/SolicitaUnaCotizacionYaMismo'

export default function page() {
  return(
    <>
      <Hero/>
      <StripeInHouse/>
      <CatalogoDeProgramas/>
      <PorQueElegirUnCursoInhouse/>
      <DescubraComoPodemosAyudarle/>
      <ExperienciaEducativaDeCalidad/>
      <SolicitaUnaCotizacionYaMismo/>
    </>
  )
}
