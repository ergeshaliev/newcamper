import React from 'react'
import { Container, ImgCon, ImgWrapp, MainCon } from './style'
import { Link } from 'react-router-dom'
import { campplace } from '../../mock/campingData'

const CampingComponent = () => {
  const data = campplace.maindata;
  return (
    <MainCon>
     <Container>
      <p>Home / Camping place</p>
      <h2>Camping places</h2>
     </Container>
     <ImgWrapp>
      {data.map ((value,index) =>{
        return (
          <Link to = {`${value.id}`}>
          <ImgCon key={index}>
            <img src={value.place.photo} alt="" />
            <h4>{value.place.placename}</h4>
            <p>{value.place.location}</p>
          </ImgCon>
          </Link>
        )
      })}
     </ImgWrapp>
    </MainCon>
  )
}

export default CampingComponent