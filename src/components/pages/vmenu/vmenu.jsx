import React from 'react'
import { BtnWrapp, Container, Header, Hmenu, ImgWrapp, ItemInfo, ItemLeft, ItemLine, ItemRight, ItemWrap, MainCon, SortCon1, SortCon2, SortCon3, SortCon4, TextCon1, TextCon2, TextWrapp, Vmenu, Wallpaper } from './style'
import FilterComponent from '../../shop/filter/filter'
import img from "../../../assets/Vmenu-img.svg"
import star from "../../../assets/star-icon.svg"
import WallpaperComponent from '../../wallpaper'
import str from "../../../assets/strelka.svg"
import hmenu from "../../../assets/HMenu.svg"
import vmenu from "../../../assets/VMenu.svg"
import { Link } from 'react-router-dom'


const VmenuComponent = () => {
  return (
       <Wallpaper>
            <WallpaperComponent/>
         <Header>
           <FilterComponent/>
          <MainCon>
            <ItemWrap>
                  <ItemInfo>
                        <ItemLeft>
                              <h4>Item</h4>
                              <p>45</p>
                        </ItemLeft>
                        <ItemRight>
                              <SortCon1>
                                    <h3>Sort by</h3>
                              </SortCon1>
                              <SortCon2>
                                    <input type="text" placeholder='Select' />
                                    <p></p>
                                    <img src={str} alt="" />
                              </SortCon2>
                              <SortCon3>
                                    <input type="text" placeholder='60' />
                                    <p></p>
                                    <img src={str} alt="" />
                              </SortCon3>
                              <SortCon4>
                                    <Hmenu>
                                       <p></p>
                                       <Link to = {"/motor"}>
                                        <img src={hmenu} alt="" />
                                       </Link>
                                    </Hmenu>
                                    <Vmenu>
                                      <p></p>
                                      <img src={vmenu} alt="" />
                                    </Vmenu>
                              </SortCon4>
                        </ItemRight>
                  </ItemInfo>
                  <ItemLine>
                        <p></p>
                  </ItemLine>
            </ItemWrap>
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
     </Wallpaper>   
  )
}

export default VmenuComponent