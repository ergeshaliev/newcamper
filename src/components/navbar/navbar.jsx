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
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Container>
      <LeftCon>
        <Logo src={ logo}/>
      </LeftCon>
      <MidCon>
        <Link></Link>
          <MotoCon>
            <Link to={"/motor"}>
             <p>Motor</p>
            </Link>
            <img src={str1} alt="" />
          </MotoCon>
        <MotoCon>
          <Link to={"/caravan"}>
           <p>Caravan</p>
          </Link>
          <img src= {str2} alt="" />
        </MotoCon>
        <MotoCon>
          <Link to ={"/tuning"} >
           <p>Tuning</p>
          </Link>
          <img src= {str3} alt="" />
        </MotoCon>
        <MotoCon>
          <Link to = {"/usedcar"}>
           <p>Used Car</p>
          </Link>
          <img src={str4} alt="" />
        </MotoCon>
        <Link to = {"/camping"}>
          <p>Camping Place</p>
        </Link>
      </MidCon>
      <RightCon>
         <Input1>
          <Link to = {"/cart"}>
            <img src={cart} alt="cart-icon" />
          </Link>
          <Link to = {"/login"}>
            <img src={profile} alt="prodile-icon" />
          </Link>
        </Input1>
        <p>EN</p>
        <img src={lang} alt="lang-icon" />
      </RightCon>
    </Container>
  )
}

export default NavbarComponent