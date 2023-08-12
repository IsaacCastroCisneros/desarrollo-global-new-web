import React from 'react'
import Block from './Block'
import Image from 'next/image';

export default function CertificacionProgram() 
{
  return (
    <Block
      title="Certificación"
      subtitle="Obtén una certificación reconocida en el mercado que respalde tus habilidades y conocimientos."
    >
      <Image src="/img/curGuy.webp" width={912} height={585} alt='hombre emocionado sosteniendo certificado' />   
    </Block>
  );
}
