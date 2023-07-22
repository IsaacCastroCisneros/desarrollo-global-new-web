"use client"

import Image from 'next/image'
import React,{useState} from 'react'
import items from './util/items';
import Item from './components/Item';
import Button from '@/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobMenu from './components/MobMenu/MobMenu';
import Link from 'next/link';

export default function Navbar() 
{
  const[show,setShow]=useState<boolean>(false)

  return (
    <header className="block fixed top-0 left-0 w-[100%] my-shadow navbar1:py-[.5rem] z-[99] bg-[#fff]">
      <MobMenu show={show} setShow={setShow} />
      <nav className="custom-container flex items-center justify-between">
        <div className="flex items-center gap-[.5rem] mr-[2rem]">
          <Link href="/">
            <Image
              src="/img/DG-Logotipo.webp"
              height={54}
              width={220}
              alt="Desarrollo Global"
            />
          </Link>
          <Image
            src="/img/certificacion_iso_co.webp"
            className="navbar1:hidden"
            height={62}
            width={126}
            alt="Certificacion Iso"
          />
        </div>
        <ul className="flex gap-[1.5rem] navbar:hidden">
          {items.map((item, pos) => (
            <Item key={pos} href={item.href} label={item.label} />
          ))}
        </ul>
        <Button name='ingresar al aula virtual' className="ml-auto navbar1:hidden">ingreso aula virtual</Button>
        <button
          className="navbar:block hidden ml-[1rem]"
          onClick={() => setShow(!show)}
          name='abrir menu'
        >
          <FontAwesomeIcon size="xl" icon={faBars} />
        </button>
      </nav>
    </header>
  );
}
