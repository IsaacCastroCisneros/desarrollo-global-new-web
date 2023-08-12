import img from "@/interfaces/img"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface myImg extends img
{
  src2:string
}

export default interface boxes
{
    title:string
    icon:IconProp
    num:number
    description:string
}