"use client"

import values from "../interfaces/values";
import React from "react";

const cursoContext = React.createContext<values>({data:
    {
        id: "",
        etiqueta: "",
        titulo: "",
        icono: "",
        banner: "",
        objectivos: "",
        descripcion: "",
        inicio: "",
        landing: "",
        imagen: "",
        certificados: "",
        asesores: [{
            nombre: "",
            descripcion: "",
            profesion: "",
            telefono: "",
            telefono_2: "",
            avatar: "",
          }] ,
        video: "",
        source: "",
        precio: {
          normal: 0,
          descuento: 0,
          final: 0,
        },
        sesiones:[{
            id:"",
            titulo: "",
            sub_titulo: "",
            descripcion: "",
          }] ,
        total_sesiones: 0,
        profesores:[{
            nombre: "",
            descripcion: "",
            profesion: "",
            telefono: "",
            telefono_2: "",
            avatar: "",
          }],
        testimonios:[{
            usuario: "",
            avatar: "",
            registro: "",
            comentario: "",
          }] ,
        alumnos: 0,
        color: "",
        comprado: false,
        valoracion: {
          totales: 0,
          porcentaje: 0,
        },
        tipo_clase: "",
        tipo:"",
        seo:"",
        nuevo_seos: {
          titulo: "",
          descripcion: "",
          tags: "",
        },
      }})

export default cursoContext