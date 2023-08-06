import React from 'react'
import ButonBox from './components/ButtonBox/ButonBox';
import Button from '@/components/Button/Button';
import MyLink from '@/components/MyLink/MyLink';
import { twMerge } from 'tailwind-merge';
import buttonStyle from '../styles/buttonStyle';

export default function Buttons({styles={section:""}}:{styles?:{section?:string}}) 
{
  const{section}=styles

  return (
    <section className={twMerge("text-center flex justify-center",section)} >
      <ButonBox
        title="Para solicitar una cotización, haga clic aquí."
        button={
          <Button
            className={twMerge(buttonStyle, "bg-myOrange")}
          >
            Solicitar Proforma
          </Button>
        }
      />
      <ButonBox
        title="También puede contactarnos a través de WhatsApp"
        button={
          <MyLink
            href="/"
            className={twMerge(buttonStyle, "bg-myGreen5")}
          >
            WhatsApp
          </MyLink>
        }
      />
    </section>
  );
}
