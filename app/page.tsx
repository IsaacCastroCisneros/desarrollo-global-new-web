import { Metadata } from "next"
import Hero from "./components/Hero/Hero"
import Stripe from "./components/Stripe/Stripe"
import ListaDeProximos from "./components/ListaDeProximos/ListaDeProximos"
import SomosTuMeJorOpcion from "./components/SomosTuMeJorOpcion/SomosTuMeJorOpcion"

export const metadata:Metadata = {
  title: 'Centro de Capacitación y Desarrollo Global',
  description: 'Desarrollo Global con mas de 12 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9301-2015.',
}


export default function Home() 
{
  return (
    <>
      <Hero/>
      <Stripe/>
      <ListaDeProximos/>
      <SomosTuMeJorOpcion/>
    </>
  )
}
