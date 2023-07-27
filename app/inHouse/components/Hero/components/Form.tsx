"use client"

import inHouse from '@/app/inHouse/context/inHouse';
import Button from '@/components/Button/Button';
import CheckBox from '@/components/CheckBox/CheckBox';
import Input from '@/components/Input/Input';
import InputFlexContainer from '@/components/InputFlexContainer/InputFlexContainer';
import MyForm from '@/components/MyForm/MyForm';
import MyLink from '@/components/MyLink/MyLink';
import Select from '@/components/Select/Select';
import selectOption from '@/interfaces/selectOption';
import Image from 'next/image';
import React, { useContext, useState } from 'react'

interface values
{
  nombre:string
  email:string
  telefono:string
  programa:string
  cantidadDeAlumnos:cantidadDeAlumnos
  nivelDeCurso:nivelDeCurso
  empresaEntidad:string
}

type cantidadDeAlumnos = "5-10"|"10-15"|"15-20"|"20-30"|"30-40"|"40-50"|"" 
type nivelDeCurso = "Basico"|"Intermedio"|"Avanzado"|"" 

export default function Form() 
{
  const[values,setValues]=useState<values>(
    {
      nombre:"",
      email:"",
      telefono:"",
      programa:"",
      cantidadDeAlumnos:"",
      empresaEntidad:"",
      nivelDeCurso:""
    }
  )

  const{data}=useContext(inHouse)

  const programas:Array<selectOption> = data.map((data)=>
  {
    return {value:data.id,label:data.titulo}
  }) 

  const cantidadDeAlumnos:Array<{value:cantidadDeAlumnos,label:string}>=
  [
    {value:"5-10",label:"De 5 a 10 participantes"},
    {value:"10-15",label:"De 10 a 15 participantes"},
    {value:"15-20",label:"De 15 a 20 participantes"},
    {value:"20-30",label:"De 20 a 30 participantes"},
    {value:"30-40",label:"De 30 a 40 participantes"},
    {value:"40-50",label:"De 40 a 50 participantes"},
  ]
  const nivelDeCurso: Array<{ value: nivelDeCurso; label: nivelDeCurso }> = [
    { value: "Basico", label: "Basico" },
    { value: "Intermedio", label: "Intermedio" },
    { value: "Avanzado", label: "Avanzado" },
  ];

  return (
    <div className="p-[1rem] border-[4px] border-myOrange w-[580px] ml-auto rounded-[.6rem] relative 700px:w-[100%]">
      <Image
        src="/img/inhouseArrow.webp"
        className="hero-response:hidden absolute left-0 translate-x-[-120%] rotate-[-90deg] top-[-3rem]"
        width={194}
        height={174}
        alt="flecha naranja"
      />
      <strong className="text-[34px] mb-[.8rem] text-center block 700px:text-[25px]">
        Solicitar una cotización aquí
      </strong>
      <p className="text-[22px] mb-[.8rem] text-center block">
        ¡Completa el formulario y solicita tu proforma personalizada ahora
        mismo!
      </p>
      <MyForm submit={async () => {}}>
        <InputFlexContainer>
          <Input
            placeholder="Nombre"
            value={values.nombre}
            onChange={(e) => setValues({ ...values, nombre: e.target.value })}
          />
          <Input
            placeholder="Correo Electrónico"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </InputFlexContainer>
        <InputFlexContainer>
          <Input
            placeholder="Telefono / Celular"
            type="number"
            value={values.telefono}
            onChange={(e) => setValues({ ...values, telefono: e.target.value })}
          />
          <Input
            placeholder="Empresa / Entidad"
            value={values.empresaEntidad}
            onChange={(e) =>
              setValues({ ...values, empresaEntidad: e.target.value })
            }
          />
        </InputFlexContainer>
        <InputFlexContainer>
          <Select
            value={values.programa}
            label="Selecciona un Programa"
            options={programas}
            onChange={(e) => setValues({ ...values, programa: e.target.value })}
          />
        </InputFlexContainer>
        <InputFlexContainer className="mb-[1rem]">
          <Select
            label="Nivel del Curso"
            options={nivelDeCurso}
            value={values.nivelDeCurso}
            onChange={(e) =>
              setValues(() => {
                const nivelDeCurso = e.target.value as nivelDeCurso;
                return { ...values, nivelDeCurso };
              })
            }
          />
          <Select
            label="Cantidad de Alumnos"
            options={cantidadDeAlumnos}
            value={values.cantidadDeAlumnos}
            onChange={(e) =>
              setValues(() => {
                const cantidadDeAlumnos = e.target.value as cantidadDeAlumnos;
                return { ...values, cantidadDeAlumnos };
              })
            }
          />
        </InputFlexContainer>
        <CheckBox label="Acepto los Términos y Condiciones y las políticas de Privacidad de Datos." />
        <div className="flex gap-[.5rem] flex-wrap">
          <Button className="bg-myOrange flex-1 min-w-[247px]">
            Solicitar Profrorma
          </Button>
          <MyLink href="" className="bg-myGreen2 flex-1 min-w-[247px]">
            WhatsApp
          </MyLink>
        </div>
      </MyForm>
    </div>
  );
}
