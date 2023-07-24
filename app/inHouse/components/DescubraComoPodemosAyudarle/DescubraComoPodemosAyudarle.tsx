import Block from '@/components/Block/Block'
import Image from 'next/image';
import React from 'react'

export default function DescubraComoPodemosAyudarle() 
{
  return (
    <Block
      title="Descubra como podemos ayudarle"
      subtitle="Solicite una propuesta personalizada sin compromiso y dé el primer paso hacia el éxito de su proyecto."
    >
        <Image src="/img/descubrachica.webp" alt="chica sosteniendo una laptop" width={1278} height={852} />
    </Block>
  );
}
