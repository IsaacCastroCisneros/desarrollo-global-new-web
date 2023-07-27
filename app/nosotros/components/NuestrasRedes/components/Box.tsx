import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React from 'react'
import box from '../interfaces/box';



export default function Box({img,url,label}:box) 
{
  return (
    <div className="flex p-[.4rem] bg-bg gap-[1rem] overflow-hidden rounded-[3rem_0px_0px_3rem] items-center">
      <Link href={url} className='min-w-[86px] min-h-[86px] 700px:min-w-[45px] 700px:min-h-[45px] relative'>
        <Image {...img} fill className='top-0 left-0'  alt={img.alt} />
      </Link>
      <section className='flex-1'>
        <p className="text-[16px] uppercase mb-[.4rem] 700px:mb-[.2rem]">SÍGUENOS EN</p>
        <Link href={url} className="text-[26px] 700px:text-[20px]">
          {label}
        </Link>
      </section>
    </div>
  );
}
