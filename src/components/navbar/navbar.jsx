import React from 'react'
import { Container, LeftCon, Logo, MidCon, RightCon } from './style'
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
        <p>Motor</p>
        <img src={str1} alt="" />
        <p>Caravan</p>
        <img src= {str2} alt="" />
        <p>Tuning</p>
        <img src= {str3} alt="" />
        <p>Used Car</p>
        <img src={str4} alt="" />
        <p>Camping Place</p>
      </MidCon>
      <RightCon>
        <img src={cart} alt="cart-icon" />
        <img src={profile} alt="prodile-icon" />
        <p>EN</p>
        <img src={lang} alt="lang-icon" />
      </RightCon>
    </Container>
  )
}

export default NavbarComponent