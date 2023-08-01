import { ImageProps } from "next/image";

interface img extends ImageProps
{
   alt:string  
}

export default interface box
{
  img:img
  title:string
  subtitle:string
}