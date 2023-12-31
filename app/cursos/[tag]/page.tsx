import cursos from '@/interfaces/cursos'
import get from '@/util/get'
import React from 'react'
import Context from './context/Context'
import HeroProgarm from '@/components/Program/components/HeroProgarm'
import BlockProgram from '@/components/BlockProgram/BlockProgram'
import PorQueElegirNuestro from '@/components/Program/components/PorQueElegirNuestro/PorQueElegirNuestro'
import ProfesoreProgram from '@/components/Program/components/ProfesoreProgram'
import ContentProgram from '@/components/Program/components/ContentProgram/ContentProgram'
import NuestraProuesta from '@/components/Program/components/NuestraPropuesta/NuestraProuesta'
import CertificacionProgram from '@/components/Program/components/CertificacionProgram'
import InversionFormas from '@/components/Program/components/InversionFormas/InversionFormas'

export default async function page({params}:any) 
{
  const{tag}=params

  const{data}=await get('cursos',tag)
  const curso = data as cursos

  const{titulo,descripcion,profesores}=curso

  return (
    <Context data={curso}>
      <HeroProgarm titulo={titulo} descripcion={descripcion} type="Curso" />
      <BlockProgram>
         <PorQueElegirNuestro/>
         <ContentProgram/>
         <ProfesoreProgram/>
         <NuestraProuesta/>
         <CertificacionProgram/>
         <InversionFormas/>
      </BlockProgram>
    </Context>
  )
}
