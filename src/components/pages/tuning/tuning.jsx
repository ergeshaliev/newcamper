import React from 'react'
import { Container, MainCon } from './style'
import ShopComponent from '../../shop/shop'

const TuningComponent = () => {
  return (
    <MainCon>
     <Container>
      <p>Home / Tuning</p>
      <h3>Our ranges</h3>
      <h2>Tuning</h2>
     </Container>
     <ShopComponent/>
    </MainCon>
  )
}

export default TuningComponent