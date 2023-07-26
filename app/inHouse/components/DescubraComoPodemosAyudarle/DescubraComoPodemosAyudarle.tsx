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
      subtitle="Solicite una propuesta personalizada sin compromiso y dé el primer paso hacia el éxito de su proyecto."
    >
      <div className="flex mt-[2rem] justify-center">
        <section>
          <Image
            src="/img/descubrachica.webp"
            alt="chica sosteniendo una laptop"
            className="1300px:hidden"
            width={1278}
            height={852}
          />
        </section>
        <section className="text-center flex flex-col gap-[3rem]">
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
