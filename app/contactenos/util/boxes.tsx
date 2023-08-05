import Button from "@/components/Button/Button";
import box from "../interfaces/box";
import MyLink from "@/components/MyLink/MyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const boxes:Array<box>=
[
    {
        img:{src:"/img/contact1.webp",alt:"icono de edificio",width:123,height:123},
        title:"Oficina Lince",
        subtitle:"Av. Julio C. Tello 741 - Lince",
        content:<Button className="bg-white border-[4px] px-[.8rem] mt-[1.4rem] border-primary text-primary text-[25px]">Ver Ubicación en Maps</Button>
    },
    {
        img:{src:"/img/contact2.webp",alt:"icono de edificio",width:114,height:116},
        title:"Si, eres alumno contacta aquí",
        content:<WpLink/>
    },
    {
        img:{src:"/img/contact3.webp",alt:"icono de edificio",width:118,height:103},
        title:"Para solicitud de Certificaciones",
        content:<WpLink/>
    }
] 

function WpLink()
{
    return (
      <MyLink href="" className="bg-myGreen4 mt-[1.4rem] text-white text-[31px] 700px:gap-[.8rem] flex gap-[1.3rem] w-[100%] py-[.2rem]">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white" size="2xl" />
        <span>WhatsApp</span>
      </MyLink>
    );
}

export default boxes
