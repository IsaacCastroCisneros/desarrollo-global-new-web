import Image from 'next/image';
import React from 'react'

export default function Hero() {
  return (
    <div className="bg-bg3 hero-top-margin">
      <article className="flex custom-container2 text-[#fff] pt-[4.4rem] items-center pb-[3.5rem]">
        <section className="flex-1">
          <h1 className="text-[60px] font-bold leading-[2.8rem]">
            Participa en nuestras Clases Gratuitas
          </h1>
          <p className='text-[28px] leading-[1.4rem]'>
            Participa de nuestro eventos gratuitos virtuales, regístrate gratis
            aquí.
          </p>
        </section>
        <section className="flex-1">
            <Image src="/img/Enmascarar grupo 7.webp" width={189} height={222} alt='profesor dictando clase' />
            <Image src="/img/Enmascarar grupo 8.webp" width={220} height={260} alt='profesor dictando clase' />
            <Image src="/img/Enmascarar grupo 9.webp" width={230} height={260} alt='profesor dictando clase' />
            <Image src="/img/Enmascarar grupo 10.webp" width={188} height={210} alt='profesor dictando clase' />
        </section>
      </article>
    </div>
  );
}
