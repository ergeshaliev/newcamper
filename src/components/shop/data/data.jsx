import React from 'react'
import { BrandRang, BrandStar, BranWrapp, BtnWrapp, CardWrapp, CartWrapp, Container, Input1, Input2, Input3, InputImg, ItemInfo, ItemLeft, ItemLine, ItemRight, ItemWrap, Right2, Right3, SortCon } from './style'
import staricon from "../../../assets/star-icon.svg"
import strelka from "../../../assets/strl.svg"
import inputimg from "../../../assets/HMenu.svg"
import inputimg1 from "../../../assets/VMenu.svg"
import { campcar } from '../../mock/motor'
import { Link } from 'react-router-dom'

const DataComponent = () => {
    const data = campcar.maindata;
   return (
    <Container>
      <ItemWrap>
        <ItemInfo>
          <ItemLeft>
            <h5>Item</h5>
            <p>{data.length}</p>
          </ItemLeft>
          <ItemRight>
            <SortCon>
              <p>Sort by</p>
              <input type="text"placeholder='Select' />
            </SortCon>
            <Input1>
              <p></p>
              <img src={strelka} alt="icon" />
            </Input1>
            <Right2>
              <input type="text" placeholder='60'/>
              <Input2>
               <p></p>
               <img src={strelka} alt="" />
              </Input2>
            </Right2>
            <Right3>
              <Input3>
                 <p></p>
                 <img src={inputimg} alt="icon" />
              </Input3>
              <InputImg>
                  <p></p>
                  <Link to = {"/vmenu"}>
                   <img src={inputimg1} alt="icon"/>
                  </Link>
              </InputImg>
            </Right3>
             <p></p>
          </ItemRight>
        </ItemInfo>
        <ItemLine>
          <p></p>
        </ItemLine>
      </ItemWrap>  
      <CardWrapp>
        {data.map ((value, index) =>{
          return(
        <CartWrapp key={index}>
          <img src={value.car.photo || "No photo"} alt=""/>
          <h3>{value.car.name}</h3>
          <BrandRang>
            <BranWrapp>
              <p>{value.car.company}</p>
            </BranWrapp>
            <BrandStar>
             <img src={staricon} alt="icon" />
             <p>{value.car.rate}</p>
            </BrandStar>
          </BrandRang>
          <h4>{value.car.cost} ₩</h4>
          <BtnWrapp>
           <button>Order</button>
           <button>Compare</button>
          </BtnWrapp>

        </CartWrapp>
          )
        })}
      </CardWrapp>
      
    </Container>



  )
}

export default DataComponent