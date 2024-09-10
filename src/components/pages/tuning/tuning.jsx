import React from 'react'
import { Body, Container, DataWrapp, MainCon } from './style'
import FilterComponent from '../../shop/filter/filter'
import ItemComponent from '../../item/item'
import DataComponent from '../../shop/data/data'

const TuningComponent = () => {
  return (
    <MainCon>
     <Container>
      <p>Home / Tuning</p>
      <h3>Our ranges</h3>
      <h2>Tuning</h2>
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

export default TuningComponent