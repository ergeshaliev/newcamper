import React from 'react'
import { Container, MainCon } from './style'
import ShopComponent from '../../shop/shop'

const UsedcarComponent = () => {
  return (
    <MainCon>
      <Container>
        <p>Home / Used Car</p>
        <h3>Our ranges</h3>
        <h2>Used Car</h2>
      </Container>
      <ShopComponent/>

    </MainCon>
  )
}

export default UsedcarComponent