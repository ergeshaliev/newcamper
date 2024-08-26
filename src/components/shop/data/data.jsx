import React from 'react'
import { BrandRang, BrandStar, BranWrapp, BtnWrapp, CardWrapp, CartWrapp, Container, } from './style'
import staricon from "../../../assets/star-icon.svg"
import { campcar } from '../../mock/motor'

const DataComponent = () => {
    const data = campcar.maindata;
   return (
    <Container>  
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