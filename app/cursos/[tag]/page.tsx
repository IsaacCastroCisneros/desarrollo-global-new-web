import get from '@/util/get'
import React from 'react'

export default async function page({params}:any) 
{
  const{tag}=params

  const{data}=await get('cursos',tag)
  /* formulacion-y-evaluacion-de-proyecto-de-inversion */
  
  return (
    <div>fdfdf</div>
  )
}
