import values from "./interfaces/values"
import React from "react"

const inHouse =  React.createContext<values>({data:[],err:{isErr:false}})

export default inHouse