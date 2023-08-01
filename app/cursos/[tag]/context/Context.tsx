"use client"

import React, { ReactNode } from 'react'
import values from '../interfaces/values'
import cursoContext from './curso'

interface props extends values
{
  children:ReactNode
}

export default function Context({children,data}:props) 
{
  const values:values=
  {
    data
  }

  return (
    <cursoContext.Provider value={values} >
      {children}
    </cursoContext.Provider>
  )
}
