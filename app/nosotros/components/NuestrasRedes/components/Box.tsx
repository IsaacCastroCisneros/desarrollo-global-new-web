import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React from 'react'
import box from '../interfaces/box';



export default function Box({img,url,label}:box) 
{
  return (
    <div className="flex p-[.4rem] bg-myGray5 border-[3px] border-border3 gap-[1rem] overflow-hidden rounded-[3rem_1rem_1rem_3rem] items-center">
      <Link href={url} className='min-w-[86px] min-h-[86px] 700px:min-w-[45px] 700px:min-h-[45px] relative'>
        <Image {...img} fill className='top-0 left-0'  alt={img.alt} />
      </Link>
      <section className='flex-1'>
        <p className="text-[16px] uppercase mb-[.4rem] 700px:mb-[.2rem text-[#959492]">SÍGUENOS EN</p>
        <Link href={url} className="text-[22px] 700px:text-[20px] font-bold italic">
          {label}
        </Link>
      </section>
    </div>
  );
}
