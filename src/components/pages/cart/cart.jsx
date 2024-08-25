import React from 'react'
import { CardCon, CartBtn, CartCon, CarWrapp, Container, LeftCon, MainCon, RightCon, RightCon1, RightCon2, RightW,} from './style'
import img from "../../../assets/cart-con-img.svg"
const CartComponent = () => {
  return (
    <MainCon>
      <Container>
            <CartCon>
                  <h2>Cart</h2>
                  <p></p>
            </CartCon>
            <CartBtn>
                  <LeftCon>
                        <CarWrapp>
                              <img src={img} alt="" />
                              <button>Purchase price <h3>52541$</h3></button>
                        </CarWrapp>
                  </LeftCon>
                  <RightCon>
                        <RightCon1>
                        <h2>
                          Car Name
                        </h2>
                        <h3>550$</h3>
                        <h4>Description</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur 
                          adipiscing elit. Feugiat viverra amet,<br /> tortor  <br />
                          tristique odio scelerisque aenean <br />sodales. <br />
                          Nunc risus dolor amet porttitor tellus
                        </p>
                        <button>Continue to payment</button>
                        </RightCon1>
                        <RightCon2>
                              <h2>Enter Account Details</h2>
                              <RightW>
                                <p>First name</p>
                                <input type="text" placeholder='First name' />
                              </RightW>
                              <RightW>
                                <p>Last name</p>
                                <input type="text" placeholder='Last name' />
                              </RightW>
                              <RightW>
                                <p>Email</p>
                                <input type="text" placeholder='Your email' />
                              </RightW>
                              <RightW>
                                <p>Mobile Phone Number</p>
                                <input type="text" placeholder='Mobile Phone Number' />
                              </RightW>
                        </RightCon2>
                        <CardCon>
                              <h2>Card</h2>
                              <RightW>
                                <p>Name on card</p>
                                <input type="text" placeholder='Name on card' />
                              </RightW>
                              <RightW>
                                <p>Card Number</p>
                                <input type="text" placeholder='Card Number' />
                              </RightW>
                              <RightW>
                                <p>Expiration Month</p>
                                <input type="text" placeholder='01' />
                              </RightW>
                              <RightW>
                                <p>Expiration Year</p>
                                <input type="text" placeholder='2022' />
                              </RightW>
                              <RightW>
                                <p>CVV</p>
                                <input type="text" placeholder='CVV' />
                              </RightW>
                              <RightW>
                                <p>Billing Zip Cod</p>
                                <input type="text" placeholder='Billing Zip Cod' />
                              </RightW>
                              <button>Place Order</button>
                        </CardCon>
                  </RightCon>
            </CartBtn>
      </Container>

    </MainCon>
  )
}

export default CartComponent