"use client"

import React, { ReactNode } from 'react'
import values from './interfaces/values'
import inHouse from './inHouse'

interface props extends values
{
  children:ReactNode
}

export default function Context(props:props) 
{
  const 
  {
    children,
    data,
    err,
  }=props

  const values =
  {
    data,
    err,
  }

  return (
    <inHouse.Provider value={values} >
      {
        children
      }
    </inHouse.Provider>
  )
}
