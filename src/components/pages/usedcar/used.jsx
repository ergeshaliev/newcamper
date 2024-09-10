import React from 'react'
import { Body, Container, DataWrapp, MainCon } from './style'
import ShopComponent from '../../shop/shop'
import FilterComponent from '../../shop/filter/filter'
import ItemComponent from '../../item/item'
import DataComponent from '../../shop/data/data'

const UsedcarComponent = () => {
  return (
    <MainCon>
      <Container>
        <p>Home / Used Car</p>
        <h3>Our ranges</h3>
        <h2>Used Car</h2>
      </Container>
      <Body>
        <FilterComponent/>
        <DataWrapp>
          <ItemComponent/>
          <DataComponent/>
        </DataWrapp>
      </Body>
      <ShopComponent/>

    </MainCon>
  )
}

export default UsedcarComponent