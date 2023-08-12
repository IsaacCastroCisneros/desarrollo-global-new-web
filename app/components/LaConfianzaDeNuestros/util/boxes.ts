import { ImageProps } from "next/image";

interface img extends ImageProps
{
    alt:string
}

const myNum = 10

const boxes:Array<img>=
[
    {
      width:166-myNum,
      height:92-myNum,
      alt:"logo de sunarp",
      src:"/img/sunarp.webp"
    },
    {
      width:195-myNum,
      height:61-myNum,
      alt:"logo de MTC",
      src:"/img/mtc.webp"
    },
    {
      width:106-myNum,
      height:60-myNum,
      alt:"logo de ONP",
      src:"/img/onp.webp"
    },
    {
      width:396-myNum,
      height:60-myNum,
      alt:"logo de osinergmin",
      src:"/img/osi.webp"
    },
    {
      width:243-myNum,
      height:69-myNum,
      alt:"indecopi",
      src:"/img/indecopi.webp"
    }
]

export default boxes