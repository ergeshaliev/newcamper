import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/carousel-img1.svg"
import img2 from "../../assets/carousel-img2.svg"
import { Img3 } from './style';

const CarouselComponent = () => {
  return (

      <Carousel showThumbs = {false}>
       <div>
          <img src={img1} alt="" />
       </div>
       <div>
          <img src={img2} alt="" />
       </div>
       <Img3>
          <img src={img1} alt="" />
       </Img3>
      </Carousel>
  )
}

export default CarouselComponent