import React from 'react'
import BlockNosotros from '../BlockNosotros'
import Box from './components/Box'

export default function NuestraCultura() {
  return (
    <BlockNosotros
      bgUrl="img/nosotrosblock2.webp"
      styles={{leftContent:"pb-[3rem]"}}
      leftContent={
        <>
          <h2 className="text-primary block mb-[2.5rem]">Nuestra Cultura</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-y-[1.5rem] gap-x-[3rem] pr-[9.5rem] 1450px:pr-0">
            <Box
              img={{
                src: "/img/nosotrosmano.webp",
                width: 79,
                height: 79,
                alt: "mano abierta",
              }}
              title="Sinceridad"
              description="Nos comprometemos a ser honestos y transparentes en todas nuestras interacciones con nuestros clientes y colaboradores."
            />
            <Box
              img={{
                src: "/img/nosotrosidea.webp",
                width: 79,
                height: 88,
                alt: "foco encendido",
              }}
              title="Innovación"
              description="Buscamos constantemente nuevas formas de mejorar y adaptarnos a las necesidades cambiantes de nuestros clientes y del mercado."
            />
            <Box
              img={{
                src: "/img/rocket.webp",
                width: 75,
                height: 75,
                alt: "cohete despegando",
              }}
              title="Mejora Continua"
              description="Nos esforzamos por mejorar continuamente nuestros programas de capacitación y servicios para brindar a nuestros clientes la mejor experiencia posible."
            />
            <Box
              img={{
                src: "/img/proactividad.webp",
                width: 63,
                height: 48,
                alt: "persona agitando las manos",
              }}
              title="Proactividad"
              description="Somos proactivos en la identificación de las necesidades de nuestros clientes y en la búsqueda de soluciones efectivas para satisfacerlas."
            />
          </div>
        </>
      }
      riteContent={<></>}
    />
  );
}
