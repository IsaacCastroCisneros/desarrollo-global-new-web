import MyLink from "@/components/MyLink/MyLink";
import box from "../interfaces/box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const boxes: Array<box> = [
  {
    img: { alt: "icono de ubicacion", src: "/img/hablemos1.webp" },
    title: "direccion",
    content: (
      <>
        <p className="text-[#000]">Av. Julio C. Tello 741 - Lince</p>
      </>
    ),
  },
  {
    img: { alt: "icono de whatssapp", src: "/img/hablemos2.webp" },
    title: "ATENCIÓN ALUMNOS",
    content: (
      <MyLink
        className="bg-myGreen5 flex gap-[.5rem] text-[35px] py-[.2rem]"
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=51990945941&text=Hola,%20solicito%20información%20mi%20correo%20es: `}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="xl" className="text-[#fff]" />
        933929742
      </MyLink>
    ),
  },
  {
    img: { alt: "icono de carta", src: "/img/hablemos3.webp" },
    title: "email",
    content: (
      <a href="mailto:asesoría@desarrolloglobal.pe" className="text-[22px]">
        <p>asesoría@desarrolloglobal.pe</p>
      </a>
    ),
  },
];

export default boxes
