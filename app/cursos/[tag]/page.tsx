import cursos from '@/interfaces/cursos'
import get from '@/util/get'
import React from 'react'

export default async function page({params}:any) 
{
  const{tag}=params

  const{data}=await get('cursos',tag)
  const cursos = data as cursos
  /* formulacion-y-evaluacion-de-proyecto-de-inversion */
  /* fd */
  
  return (
    <div>{cursos.titulo}</div>
  )
}
