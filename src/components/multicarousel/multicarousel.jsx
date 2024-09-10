import React from 'react'
import  Carousel  from  "react-multi-carousel" ; 
import  "react-multi-carousel/lib/styles.css" ; 
import { ChooseCon, DisBtn, ImageCon,} from './style';
import choose from "../../assets/strelka.svg"
import { campcar } from '../mock/motor';

const  responsive  =  { 
      superLargeDesktop : { 
        breakpoint : {  max : 4000 ,  min : 3000  } , 
        items : 10
      } , 
      desktop : { 
        breakpoint : {  max : 3000 ,  min : 1024  } , 
        items : 4
      } , 
      tablet : { 
        breakpoint : {  max : 1024 ,  min : 464  } , 
        items : 2
      } , 
      mobile : { 
        breakpoint : {  max : 464 ,  min : 0  } , 
        items : 1 
      } 
    } ;     
const MultiCarouselComponent = () => {
  const data = campcar.maindata;
  return (
    <div>
       <Carousel responsive={responsive}>
        {data.map ((value) => {
          return (
           <ImageCon>
                              <img src={value.car.photo || "No Photo"} alt="`photo`"/>
                              <p>{value.car.name}</p>
                              <DisBtn>
                                <button><p>Discover the range</p></button>
                              </DisBtn>
                              <ChooseCon>
                               <p>Choose a model</p>
                               <img src={choose} alt="" />
                              </ChooseCon>
           </ImageCon>
          )
        })}
       </Carousel>
    </div>
  );
}

export default MultiCarouselComponent