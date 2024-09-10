import React from 'react'
import { Body, Container, DataWrapp, MainCon } from './style'
import ItemComponent from '../../item/item'
import FilterComponent from '../../shop/filter/filter'
import DataComponent from '../../shop/data/data'

const CaravanComponent = () => {
  return (
    <MainCon>
     <Container>
       <p>Home / Caravan</p>
       <h3>Our ranges</h3>
       <h2>Caravan</h2>
     </Container>
     <Body>
      <FilterComponent/>
      <DataWrapp>
      <ItemComponent/>
      <DataComponent/>
      </DataWrapp>
     </Body>
    </MainCon> 
  )
}

export default CaravanComponent