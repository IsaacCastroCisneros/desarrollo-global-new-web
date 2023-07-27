import values from "./interfaces/values"
import React from "react"

const inHouse =  React.createContext<values>({data:[],err:false})

export default inHouse