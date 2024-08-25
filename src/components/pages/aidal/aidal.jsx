import React from 'react'
import { BtnCon, BtnLeft, BtnRight, BtnWrapp, Con1, Con1Left, Con1Right, Con1RightBtn, Con1RightTop, Con2, Con2Left, Con2Right, Con3, Con3Left, Con3Right, Con4, Con4Left, Con4Right, Con5, Con5Left, Con5Right, Con6, Con6Left, Con6Right, Container, LineW, MainCon, TextLeft, TextRight, Topleft, TopRight, Wrapper } from './style'
import imgg from "../../../assets/Con1img.svg"
import con2 from "../../../assets/Con2img.svg"
import con3 from "../../../assets/con3img.svg"
import con4 from "../../../assets/con4img.svg"
import con5 from "../../../assets/Con5img.svg"
import con6 from "../../../assets/con6img.png"

const AidalComponent = () => {
  return (

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
                <h3>Aidal</h3>
                <p>aid</p>
              </Topleft>
              <TopRight>
                <h3>50.000$</h3>
              </TopRight>
            </Con1RightTop>
            <LineW><p></p></LineW>
            <Con1RightBtn>
              <TextLeft>
                <p>Company</p>
                <p>People</p>
                <p>License type</p>
              </TextLeft>
              <TextRight>
                <p>Aidal company</p>
                <p>12</p>
                <p>License type</p>
              </TextRight>

            </Con1RightBtn>
          </Con1Right>
        </Con1>
        <Con2>
          <Con2Left>
            <h3>Comfort</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br />nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,<br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br />Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin <br /> sed proin iaculis mi.
            </p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br /> nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, <br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br />Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin <br />sed proin iaculis mi.</p>
          </Con3Right>
        </Con3>
        <Con4>
          <Con4Left>
            <h3>Ventilated , Lit up</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br /> nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, <br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br />Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin <br />sed proin iaculis mi.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum <br /> nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, <br /> id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. <br />Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna <br />sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin <br />sed proin iaculis mi.</p>
          </Con5Right>
        </Con5>
        <Con6>
          <Con6Left>
            <h3>Heating when driving</h3>
            <p>Fuel heating is now very popular in the industry, but this was not <br /> always the case; Camper (once again) led the way in this area over <br />15 years ago. <br />
            One of the advantages it offers is that it can heat up your vehicle <br />while you drive, for a more comfortable arrival.</p>
              <BtnWrapp>
                <BtnLeft><button>ADD TO CART</button></BtnLeft>
                <BtnRight><button>COMPARE</button></BtnRight>
              </BtnWrapp>
          </Con6Left>
          <Con6Right>
             <img src={con6} alt="" />
          </Con6Right>
        </Con6>

      </Wrapper>

    </MainCon>
  )
}

export default AidalComponent