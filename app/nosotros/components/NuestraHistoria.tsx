import React from 'react'
import BlockNosotros from './BlockNosotros';

export default function NuestraHistoria() 
{
  return (
    <BlockNosotros
      bgUrl="/img/nosotrosblock1.webp"
      leftContent={
        <div className='pr-[17.5rem] 1450px:pr-0 1450px:text-center'>
          <h2 className="mb-[1rem]">Nuestra Historia</h2>
          <p className="text-myBlue2 text-[18px]">
            {`"En la Escuela "Desarrollo Global", nos enorgullece ofrecer una amplia gama de programas de desarrollo gerencial de alta calidad tanto para servidores civiles del sector público como para profesionales del sector privado en nuestro país. Desde 2011, hemos brindado capacitaciones en línea y presenciales, incluyendo diplomas, cursos, seminarios, conferencias y talleres, con el objetivo de proporcionar a nuestros clientes un servicio excepcional.`}
            <br></br>
            <span className="mt-[2rem] block">
              {`Nos esforzamos por ser líderes en la industria de la educación, y estamos comprometidos en ayudar a nuestros estudiantes a alcanzar sus metas profesionales y personales."`}
            </span>
          </p>
        </div>
      }
      riteContent={<></>}
    />
  );
}
