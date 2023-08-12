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
import post from '@/util/post';
import Image from 'next/image';
import React, { useContext, useState } from 'react'

interface values
{
  nombre:string
  email:string
  telefono:string
  programa:{id:string,programa:string}
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
      programa:{id:"",programa:""},
      cantidadDeAlumnos:"",
      empresaEntidad:"",
      nivelDeCurso:""
    }
  )

  const{data}=useContext(inHouse)

  const programas:Array<selectOption> = data.map((data)=>
  {
    return {value:`${data.id}-${data.titulo}` ,label:data.titulo}
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

  async function submittingForm():Promise<void>
  {
    const form = new FormData()
    form.append('pagina', "www.desarrolloglobal.com/inh")
    form.append('cantidad', values.cantidadDeAlumnos)
    form.append('inhouse', values.programa.programa)
    form.append('id_inhouse', values.programa.id)
    form.append('correo', values.email)
    form.append('entidad', values.empresaEntidad)
    form.append('nivel', values.nivelDeCurso)
    form.append('nombres', values.nombre)
    form.append('telefono', values.telefono)
    /* form.append('ciudad', geo) */

    const {data,err} = await post('inHouseProspecto',form)
    console.log(data)
    if(err.isErr)
    {
      console.log(err.err)
    }
  }


  return (
    <div className="p-[1rem] border-[4px] border-myOrange w-[550px] ml-auto rounded-[.6rem] relative 700px:w-[100%] bg-white">
      <Image
        src="/img/inhouseArrow.webp"
        className="hero-response:hidden absolute left-0 translate-x-[-110%] rotate-[-85deg] top-[-1rem]"
        width={194-15}
        height={174-15}
        alt="flecha naranja"
      />
      <strong className="text-[34px] mb-[.3rem] block 700px:text-[25px] 700px:text-center">
        Solicitar una cotización aquí
      </strong>
      <p className="text-[22px] mb-[1rem] block 700px:text-center font-medium">
        ¡Completa el formulario y solicita tu proforma personalizada ahora
        mismo!
      </p>
      <MyForm submit={submittingForm}>
        <InputFlexContainer>
          <Input
            placeholder="Nombre"
            onlyText
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
            value={values.programa.id}
            label="Selecciona un Programa"
            options={programas}
            onChange={(e) => {
              const value = e.target.value;
              const split = value.split("-");

              setValues({
                ...values,
                programa: { id: split[0], programa: split[1] },
              });
            }}
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
          <Button className="bg-myOrange flex-1 min-w-[240px]">
            Solicitar Proforma
          </Button>
          <MyLink
            href="https://api.whatsapp.com/send?phone=51987756735&text=¡Hola Sheyla!,%20solicito%20información de la modalidad In House"
            className="bg-myGreen5 flex-1 min-w-[240px]" target='_blank'
          >
            WhatsApp
          </MyLink>
        </div>
      </MyForm>
    </div>
  );
}
