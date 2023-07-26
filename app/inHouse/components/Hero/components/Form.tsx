import Button from '@/components/Button/Button';
import CheckBox from '@/components/CheckBox/CheckBox';
import Input from '@/components/Input/Input';
import InputFlexContainer from '@/components/InputFlexContainer/InputFlexContainer';
import MyForm from '@/components/MyForm/MyForm';
import MyLink from '@/components/MyLink/MyLink';
import Image from 'next/image';
import React from 'react'

export default function Form() {
  return (
    <div className="p-[1rem] border-[4px] border-myOrange w-[580px] ml-auto rounded-[.6rem] relative 700px:w-[100%]">
      <Image src="/img/inhouseArrow.webp" className=' heroInhouse:hidden absolute left-0 translate-x-[-120%] rotate-[-90deg] top-[-3rem]' width={194} height={174} alt='flecha naranja' />
      <strong className="text-[34px] mb-[.8rem] text-center block 700px:text-[25px]">Solicitar una cotización aquí</strong>
      <p className="text-[22px] mb-[.8rem] text-center block">
        ¡Completa el formulario y solicita tu proforma personalizada ahora
        mismo!
      </p>
      <MyForm>
        <InputFlexContainer>
          <Input placeholder="Nombre" />
          <Input placeholder="Correo Electrónico" type="email" />
        </InputFlexContainer>
        <InputFlexContainer>
          <Input placeholder="Telefono / Celular" type="number" />
          <Input placeholder="Empresa / Entidad" />
        </InputFlexContainer>
        <InputFlexContainer>
          <Input placeholder="Elige programa de tu intéres" />
        </InputFlexContainer>
        <InputFlexContainer className='mb-[1rem]'>
          <Input placeholder="Nivel del Curso" />
          <Input placeholder="Cantidad de Alumnos" />
        </InputFlexContainer>
        <CheckBox label='Acepto los Términos y Condiciones y las políticas de Privacidad de Datos.'/>
        <div className='flex gap-[.5rem] flex-wrap'>
          <Button className='bg-myOrange flex-1 min-w-[247px]' >Solicitar Profrorma</Button>
          <MyLink href="" className='bg-myGreen2 flex-1 min-w-[247px]' >WhatsApp</MyLink>
        </div>
      </MyForm>
    </div>
  );
}
