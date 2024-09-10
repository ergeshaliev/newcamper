import React from 'react'
import { Body, BtnWrapp, Container, DataWrapp, Header, ImgWrapp, MainCon, TextCon1, TextCon2, TextWrapp, Wallpaper } from './style'
import img from "../../../assets/Vmenu-img.svg"
import star from "../../../assets/star-icon.svg"
import WallpaperComponent from '../../wallpaper'
import FilterComponent from '../../shop/filter/filter'
import ItemComponent from '../../item/item'


const VmenuComponent = () => {
  return (
       <Wallpaper>
         <WallpaperComponent/>
         <Body>
          <FilterComponent/>
          <DataWrapp>
            <ItemComponent/>
           <Header>
          <MainCon>
            <Container>
             <ImgWrapp>
             <img src={img} alt="" />
             </ImgWrapp>
              <TextWrapp>
                  <TextCon1>
                        <h3>Name of the car</h3>
                        <p>250 $</p>
                  </TextCon1>
                  <TextCon2>
                        <h3>Brand name</h3>
                        <img src={star} alt="" />
                        <p>5.3</p>
                  </TextCon2>
                  <BtnWrapp>
                   <button>Order</button>
                   <button>Сompare</button>
                  </BtnWrapp>
              </TextWrapp>
            </Container>
          </MainCon>
           </Header>
          </DataWrapp>
         </Body>
       </Wallpaper>   
  )
}

export default VmenuComponent