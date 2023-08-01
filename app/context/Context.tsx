"use client"

import React, { ReactNode } from 'react'
import home from './home'
import values from './interfaces/values'

interface props extends values
{
    children:ReactNode
}

export default function Context({children,data,err}:props) 
{
  const values:values=
  {
    data,
    err,
  }

  return (
    <home.Provider value={values} >
      {
        children
      }
    </home.Provider>
  )
}
