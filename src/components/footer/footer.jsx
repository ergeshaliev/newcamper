import React from 'react'
import { ContactCon, ContactIcon, Container, Logo, LogoCon, MenuCon, NavCon, ServicesCon, } from './style'
import wall from "../../assets/whiteCamper-2.svg"
import icon1 from "../../assets/icon-youtube.svg"
import icon2 from "../../assets/instagram-icon.svg"
import icon3 from "../../assets/naver-icon.svg"
const FooterComponent = () => {
  return (
    <Container>
      <LogoCon>
      <Logo src={ wall}/>
      </LogoCon>
      <NavCon>
        <ServicesCon>
              <h5>Services</h5>
              <p>Camping</p>
              <p>Lodging</p>
              <p>Harbor</p>
              <p>Day Use</p>
        </ServicesCon>
        <MenuCon>
            <h5>Menu</h5>
            <p>About</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Blog</p>
        </MenuCon>
        <ContactCon>
            <h5>Contact</h5>
            <ContactIcon>
                  <img src={icon1} alt="" />
                  <img src={icon2} alt="" />
                  <img src={icon3} alt="" />
            </ContactIcon>
            <p> 021 Korea Seul, LA</p>
            <p>camper@example.com</p>
            <p>(021) 345-6789-99</p>
        </ContactCon>

      </NavCon>

    </Container>
  )
}

export default FooterComponent