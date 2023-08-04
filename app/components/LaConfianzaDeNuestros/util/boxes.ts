import { ImageProps } from "next/image";

interface img extends ImageProps
{
    alt:string
}

const boxes:Array<img>=
[
    {
      width:166,
      height:92,
      alt:"logo de sunarp",
      src:"/img/sunarp.webp"
    },
    {
      width:195,
      height:61,
      alt:"logo de MTC",
      src:"/img/mtc.webp"
    },
    {
      width:106,
      height:60,
      alt:"logo de ONP",
      src:"/img/onp.webp"
    },
    {
      width:396,
      height:60,
      alt:"logo de osinergmin",
      src:"/img/osi.webp"
    },
    {
      width:243,
      height:69,
      alt:"indecopi",
      src:"/img/indecopi.webp"
    }
]

export default boxes