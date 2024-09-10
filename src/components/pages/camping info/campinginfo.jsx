import React from 'react'
import { Header, ImageCon, ImgBox, Info1, Info2, Info3, Info4, InfoCon, Information, InfoWrapp, Line, MainCon, TextBox, TextCon } from './style'
import loc from "../../../assets/loc-img.svg"
import tel from "../../../assets/tel-icon.svg"
import clock from "../../../assets/bi_clock.svg"
import home from "../../../assets/home-icon.svg"
import { useParams } from 'react-router-dom'
import { campplace } from '../../mock/campingData'

const Campinginfo = () => {
      const { id } = useParams ();
      const data = campplace.maindata;
      const filterData = data.filter((value) => value.id === parseInt (id))
  return (
   <div>
      {filterData.map ((value) => {
            return(
    <MainCon>
      <Header>
            <ImageCon>
                  <img src={value.place.photo1} alt="" />
                  <img src={value.place.photo2} alt="" />
                  <img src={value.place.photo3} alt="" />
                  <img src={value.place.photo4} alt="" />
                  <img src={value.place.photo5} alt="" />
                  <img src={value.place.photo6} alt="" />
            </ImageCon>
            <InfoCon>
                  <h3>{value.place.placename}</h3>
                  <TextCon>
                        <p>{value.place.location}</p>
                        <button>Copy map</button>
                  </TextCon>
            </InfoCon>
            <Line>
                  <p></p>
            </Line>
            <Information>
            <InfoWrapp>
                  <Info1>
                        <img src={loc} alt="icon" />
                        <p>{value.place.city}</p>
                  </Info1>
                  <Info2>
                        <img src={tel} alt="icon" />
                        <p>{value.place.tell}</p>
                  </Info2>
            </InfoWrapp>
            <InfoWrapp>
                  <Info3>
                        <img src={clock} alt="icon" />
                        <p>{value.place.time}</p>
                  </Info3>
                  <Info4>
                        <img src={home} alt="icon" />
                        <p>{value.place.homepage}</p>
                  </Info4>
            </InfoWrapp>
            </Information>
            <TextBox>
                  <h3>Description</h3>
                  <p>{value.place.word}</p>
            </TextBox>
            <ImgBox>
             <img src={value.place.map} alt="img" />
            </ImgBox>
      </Header>
     </MainCon>
)
})}
    </div>
  )
}

export default Campinginfo