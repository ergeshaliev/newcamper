import React from 'react'
import { Container, ImgCon, ImgWrapp, MainCon } from './style'
import img from "../../../assets/campingImg1.svg"
import img2 from "../../../assets/campingImg2.svg"
import img3 from "../../../assets/campingImg3.svg"

const CampingComponent = () => {
  return (
    <MainCon>
     <Container>
      <p>Home / Camping place</p>
      <h2>Camping places</h2>
     </Container>
     <ImgWrapp>
      <ImgCon>
       <img src={img} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img2} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img3} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img2} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img3} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img2} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img3} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img2} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>
      <ImgCon>
       <img src={img3} alt="" />
       <h4>Camping place name</h4>
       <p>Location</p>
      </ImgCon>




      
     </ImgWrapp>
    </MainCon>
  )
}

export default CampingComponent