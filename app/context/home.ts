"use client"

import React from "react"
import values from "./interfaces/values"

const home = React.createContext<values>({data:[],err:{isErr:false}})

export default home