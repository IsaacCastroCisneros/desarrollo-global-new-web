import img from "@/interfaces/img";
import {ReactNode} from 'react'

export default interface box
{
    img:img
    title:string
    subtitle?:string
    content:ReactNode
}