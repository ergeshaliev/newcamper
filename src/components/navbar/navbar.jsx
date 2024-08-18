import React from 'react'
import { Container, Input1, LeftCon, Logo, MidCon, MotoCon, RightCon } from './style'
import logo from "../../assets/Camper.svg"
import cart from "../../assets/cart.svg"
import profile from "../../assets/profile.svg"
import lang from "../../assets/gromet-icon.svg"
import str1 from "../../assets/gromet-icon.svg"
import str2 from "../../assets/gromet-icon.svg"
import str3 from "../../assets/gromet-icon.svg"
import str4 from "../../assets/gromet-icon.svg"

const NavbarComponent = () => {
  return (
    <Container>
      <LeftCon>
        <Logo src={ logo}/>
      </LeftCon>
      <MidCon>
        <MotoCon>
          <p>Motor</p>
          <img src={str1} alt="" />
        </MotoCon>
        <MotoCon>
          <p>Caravan</p>
          <img src= {str2} alt="" />
        </MotoCon>
        <MotoCon>
          <p>Tuning</p>
          <img src= {str3} alt="" />
        </MotoCon>
        <MotoCon>
          <p>Used Car</p>
          <img src={str4} alt="" />
        </MotoCon>
        <p>Camping Place</p>
      </MidCon>
      <RightCon>
         <Input1>
          <img src={cart} alt="cart-icon" />
          <img src={profile} alt="prodile-icon" />
        </Input1>
        <p>EN</p>
        <img src={lang} alt="lang-icon" />
      </RightCon>
    </Container>
  )
}

export default NavbarComponent