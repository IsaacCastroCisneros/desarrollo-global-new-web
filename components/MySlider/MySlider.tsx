import React,{ReactNode} from 'react'
import Slider from 'react-slick'
import Arrow from './components/Arrow';

interface props
{
  children:ReactNode
  className?:string
  mySettings?:Record<any,any>
  arrowStyles?:string
}

export default function MySlider(props:props) 
{
  const 
  { 
    children, 
    className, 
    mySettings, 
    arrowStyles 
  } = props;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass:"slick-my-dots",
        customPaging:()=>
        {
           return(
             <button className='w-[.6rem] h-[.6rem] rounded-[100%] overflow-hidden'>
               <span className='w-[100%] h-[100%] bg-myGray block'></span>
             </button>
           )
        },
        nextArrow:<Arrow side="rite" styles={arrowStyles}  />,
        prevArrow:<Arrow side="left" styles={arrowStyles}  />,
        responsive:
        [
          {
            breakpoint: 1821,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 786,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      };

     const realSettings ={...settings,...mySettings}

  return (
    <Slider {...realSettings} >
      {
        children
      }
    </Slider>
  )
}
