import Block from '@/components/Block/Block'
import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react'
import MyLink from '@/components/MyLink/MyLink';
import ButonBox from '../ButtonBox/ButonBox';
import buttonStyle from '../styles/buttonStyle';

export default function DescubraComoPodemosAyudarle() 
{
  return (
    <Block
      title="Descubra como podemos ayudarle"
      styles={{section:"mt-[0] 1450px:mt-[3rem]"}}
      subtitle="Solicite una propuesta personalizada sin compromiso y dé el primer paso hacia el éxito de su proyecto."
    >
      <div className="relative flex 1450px:justify-center">
          <Image
            src="/img/descubrachica.webp"
            alt="chica sosteniendo una laptop"
            className="1450px:hidden w-[1278px] h-[852px]"
            width={1278}
            height={852}
          />
        <section className="text-center 1450px:relative 1450px:w-[100%] flex-1 flex flex-col gap-[3rem] absolute right-0 top-[50%] translate-y-[-50%] max-w-[484px] 1450px:top-[0] 1450px:translate-y-[0]">
          <ButonBox
            title="Para solicitar una cotización, haga clic aquí."
            button={
              <Button className={`${buttonStyle} bg-myOrange`}>
                Solicitar Proforma
              </Button>
            }
          />
          <ButonBox
            title="También puede contactarnos a través de WhatsApp"
            button={
              <MyLink href="/" className={`bg-myGreen2 ${buttonStyle}`}>
                WhatsApp
              </MyLink>
            }
          />
        </section>
      </div>
    </Block>
  );
}
