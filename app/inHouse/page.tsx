import React from 'react'
import Hero from './components/Hero/Hero'
import StripeInHouse from './components/StripeInHouse'
import CatalogoDeProgramas from './components/CatalogoDeProgramas/CatalogoDeProgramas'
import PorQueElegirUnCursoInhouse from './components/PorQueElegirUnCursoInhouse/PorQueElegirUnCursoInhouse'
import DescubraComoPodemosAyudarle from './components/DescubraComoPodemosAyudarle/DescubraComoPodemosAyudarle'
import ExperienciaEducativaDeCalidad from './components/ExperienciaEducativaDeCalidad/ExperienciaEducativaDeCalidad'
import SolicitaUnaCotizacionYaMismo from './components/SolicitaUnaCotizacionYaMismo/SolicitaUnaCotizacionYaMismo'
import get from '@/util/get'
import Context from './context/Context'

export default async function page() 
{
  const{data,err}=await get('inHouse')
  const inHouse =  data as Array<inHouse>

  return(
    <Context data={inHouse} err={err}>
      <Hero/>
      <StripeInHouse/>
      <CatalogoDeProgramas/>
      <PorQueElegirUnCursoInhouse/>
      <DescubraComoPodemosAyudarle/>
      <ExperienciaEducativaDeCalidad/>
      <SolicitaUnaCotizacionYaMismo/>
    </Context>
  )
}
