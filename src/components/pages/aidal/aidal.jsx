import React from 'react'
import { BtnCon, BtnLeft, BtnRight, BtnWrapp, Con1, Con1Left, Con1Right, Con1RightBtn, Con1RightTop, Con2, Con2Left, Con2Right, Con3, Con3Left, Con3Right, Con4, Con4Left, Con4Right, Con5, Con5Left, Con5Right, Con6, Con6Left, Con6Right, Container, LineW, MainCon, TextLeft, TextRight, Topleft, TopRight, Wrapper } from './style'
import imgg from "../../../assets/Con1img.svg"
import con2 from "../../../assets/Con2img.svg"
import con3 from "../../../assets/con3img.svg"
import con4 from "../../../assets/con4img.svg"
import con5 from "../../../assets/Con5img.svg"
import con6 from "../../../assets/con6img.png"
import { Link, useParams } from 'react-router-dom'
import { campcar } from '../../mock/motor'

const AidalComponent = () => {
  const { id } = useParams ();
  const data = campcar.maindata;
  const filterData = data.filter((value) => value.id === parseInt(id) )
  return (
    <div>
      {filterData.map((value) =>{
      return(
    <MainCon>
      <Container>
        <p>Aidal</p>
        <BtnCon>
          <button>ADD TO CART</button>
          <button>COMPARE</button>
        </BtnCon>  
      </Container>
      <Wrapper>
        <Con1>
          <Con1Left>
            <img src={imgg} alt="" />
          </Con1Left>
          <Con1Right>
            <Con1RightTop>
              <Topleft>
                <h3>{value.car.name}</h3>
                <p>{value.car.date}</p>
              </Topleft>
              <TopRight>
                <h3>{value.car.cost}</h3>
              </TopRight>
            </Con1RightTop>
            <LineW><p></p></LineW>
            <Con1RightBtn>
              <TextLeft>
                <p>Company{}</p>
                <p>People</p>
                <p>License type</p>
              </TextLeft>
              <TextRight>
                <p>{value.car.company}</p>
                <p>{value.car.people}</p>
                <p>{value.car.license}</p>
              </TextRight>

            </Con1RightBtn>
          </Con1Right>
        </Con1>
        <Con2>
          <Con2Left>
            <h3>Comfort</h3>
            <p> {value.car.word}</p>
          </Con2Left>
          <Con2Right>
            <img src={con2} alt="" width={"100%"} />
          </Con2Right>

        </Con2>
        <Con3>
          <Con3Left>
            <img src={con3} alt="" />
          </Con3Left>
          <Con3Right>
            <h3>Tidying away is child’s play!</h3>
            <p>{value.car.word1}</p>
          </Con3Right>
        </Con3>
        <Con4>
          <Con4Left>
            <h3>Ventilated , Lit up</h3>
            <p>{value.car.word2}</p>
          </Con4Left>
          <Con4Right>
            <img src={con4} alt="" />
          </Con4Right>
        </Con4>
        <Con5>
          <Con5Left>
            <img src={con5} alt="" />
          </Con5Left>
          <Con5Right>
            <h3>Tidying away is child’s play!</h3>
            <p>{value.car.word3}</p>
          </Con5Right>
        </Con5>
        <Con6>
          <Con6Left>
            <h3>Heating when driving</h3>
            <p>{value.car.word4}</p>
              <BtnWrapp>
                <BtnLeft>
                  <Link to= {"/cart"}>
                   <button>ADD TO CART</button>
                  </Link>
                </BtnLeft>
                <BtnRight>
                  <Link to = {"/motor"}>
                   <button>COMPARE</button>
                  </Link>
                </BtnRight>
              </BtnWrapp>
          </Con6Left>
          <Con6Right>
             <img src={con6} alt="" />
          </Con6Right>
        </Con6>

      </Wrapper>
    </MainCon>
)
})}
   </div>
  )
}

export default AidalComponent