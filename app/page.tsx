import { Metadata } from "next"
import Hero from "./components/Hero/Hero"
import Stripe from "@/components/Stripe/Stripe"
import ListaDeProximos from "./components/ListaDeProximos/ListaDeProximos"
import SomosTuMeJorOpcion from "./components/SomosTuMeJorOpcion/SomosTuMeJorOpcion"
import AprendeDeLosMejores from "./components/AprendeDeLosMejores/AprendeDeLosMejores"
import AcercaDeNosotros from "./components/AcercaDeNosotros/AcercaDeNosotros"
import OpinionesDeNuestros from "./components/OpinionesDeNuestros/OpinionesDeNuestros"
import LaConfianzaDeNuestros from "./components/LaConfianzaDeNuestros/LaConfianzaDeNuestros"
import Hablemos from "./components/Hablemos/Hablemos"

export const metadata:Metadata = {
  title: 'Centro de Capacitación y Desarrollo Global',
  description: 'Desarrollo Global con mas de 12 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9301-2015.',
}


export default async function Home() 
{
  return (
    <>
      <Hero />
      <Stripe />
      <ListaDeProximos />
      <SomosTuMeJorOpcion />
      <AprendeDeLosMejores/>
      <AcercaDeNosotros/>
      <OpinionesDeNuestros/>
      <LaConfianzaDeNuestros/>
      <Hablemos/>
    </>
  );
}
