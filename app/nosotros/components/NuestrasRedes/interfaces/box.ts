import { ImageProps } from "next/image"

interface img extends ImageProps
{
    alt:string
}

export default interface box 
{
   img:img
   url:string
   label:string
}