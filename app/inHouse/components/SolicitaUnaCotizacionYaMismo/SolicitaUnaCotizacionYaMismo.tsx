import Block from '@/components/Block/Block'
import React from 'react'
import ButonBox from '../ButtonBox/ButonBox';
import Button from '@/components/Button/Button';
import MyLink from '@/components/MyLink/MyLink';
import buttonStyle from '../styles/buttonStyle';

export default function SolicitaUnaCotizacionYaMismo() 
{
  return (
    <Block
      title="Solicita una Cotización !Ya mismo!"
      subtitle="Obtenga una propuesta personalizada sin compromiso. Si necesita capacitar a su personal en un tema específico, simplemente envíenos sus datos y estaremos encantados de elaborar una propuesta a medida que se ajuste a sus necesidades."
    >
      <section className="text-center flex gap-[5rem] items-stretch 1000px:flex-col 1000px:gap-[3rem]">
        <ButonBox
          title="Para solicitar una cotización, haga clic aquí."
          className='flex-1'
          button={
            <Button className={`${buttonStyle} bg-myOrange mt-auto`}>
              Solicitar Proforma
            </Button>
          }
        />
        <ButonBox
          title="También puede contactarnos a través de WhatsApp"
          className='flex-1'
          button={
            <MyLink href="/" className={`bg-myGreen2 ${buttonStyle} mt-auto`}>
              WhatsApp
            </MyLink>
          }
        />
      </section>
    </Block>
  );
}
