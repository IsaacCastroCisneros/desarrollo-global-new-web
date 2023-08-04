import Block from '@/components/Block/Block'
import Image from 'next/image'
import React from 'react'

export default function AcercaDeNosotros() 
{
  return (
    <Block
      title="Acerca de nosotros"
      subtitle="Haz clic en el video y conoce quienes somos"
    >
      <iframe
        src="https://s3-desarrollo-global.s3.us-west-2.amazonaws.com/pagina-web/desarrolloglobal_info.mp4"
        width="640"
        height="360"
        allow="fullscreen"
        className="block mx-auto rounded-md w-full md:w-[640px]"
      ></iframe>
      <div className="flex justify-center items-center mt-[2rem] 1000px:flex-col">
        <Image
          src="/img/isoIndex.webp"
          width={353}
          height={173}
          alt="certificacion iso logo"
        />
        <span className="w-[1px] bg-black h-[5rem] py-[2rem] mx-[1.6rem] 1000px:hidden"></span>
        <p className="flex-1 block max-w-[435px] text-[18px]">
          La certificación ISO 9001-2015 es un sello de calidad que garantiza
          que la Escuela Desarrollo Global cumple con los estándares
          internacionales de calidad en la gestión de sus procesos y servicios.
        </p>
      </div>
      <strong className='text-[22px] block text-center'>cod: 0125689</strong>
    </Block>
  );
}
