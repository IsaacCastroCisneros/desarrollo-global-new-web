import Image from 'next/image';
import React from 'react'
import BoxLink from './components/BoxLink';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <div
      className="bg-bg3 hero-top-margin h-[760px] 1300px:h-[initial]"
      style={{
        backgroundImage: "url(/img/Grupo-8872.webp)",
        backgroundSize: "cover",
      }}
    >
      <article className="flex custom-container2 text-[#fff] py-[4.8rem] 1300px:py-[2rem] h-[100%] 1300px:text-center">
        <section className="flex-1 flex flex-col justify-between">
          <div className="pt-[3.3rem] 1300px:pt-0 1300px:mb-[3rem]">
            <h1 className="text-[60px] font-bold leading-[2.8rem]">
              Participa en nuestras Clases Gratuitas
            </h1>
            <div className="w-[5rem] bg-[#09B2FD] h-[5px] my-[1rem] 1300px:mx-auto 1300px:w-[70%]"></div>
            <p className="text-[28px] leading-[1.4rem] max-w-[25rem] 1300px:max-w-[initial]">
              Participa de nuestros eventos gratuitos virtuales, regístrate
              gratis aquí.
            </p>
          </div>
          <div className="flex gap-[1rem] max-w-[28rem] 1300px:max-w-[initial] 1300px:w-[100%] justify-center 1300px:flex-wrap">
            <BoxLink
              icon={faTelegram}
              label="Registrarme por Telegram"
              href=""
            />
            <BoxLink
              icon={faWhatsapp}
              label="Registrarme por Whasapp"
              className="bg-myGreen6"
              href=""
            />
          </div>
        </section>
        <section className="flex-1 1300px:hidden">
          <div className="flex items-center gap-[2.4rem] justify-center">
            <div className="w-[230px] flex justify-center">
              <Image
                src="/img/Enmascarar grupo 9.webp"
                width={189}
                height={222}
                className="w-[189px] h-[222px]"
                alt="profesor dictando clase"
              />
            </div>
            <Image
              src="/img/Enmascarar grupo 7.webp"
              width={220}
              height={260}
              className="w-[220px] h-[260px]"
              alt="profesor dictando clase"
            />
          </div>
          <div className="flex items-center gap-[2.4rem] justify-center">
            <Image
              src="/img/Enmascarar grupo 8.webp"
              width={230}
              height={260}
              className="w-[230px] h-[260px]"
              alt="profesor dictando clase"
            />
            <div className="w-[220px] flex justify-center">
              <Image
                src="/img/Enmascarar grupo 10.webp"
                width={188}
                height={210}
                className="w-[188px] h-[210px]"
                alt="profesor dictando clase"
              />
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
