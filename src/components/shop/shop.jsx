import React from 'react'
import DataComponent from './data/data'
import FilterComponent from './filter/filter'
import { Container } from './style'

const ShopComponent = () => {
  return (
    <Container>
      <FilterComponent/>
      <DataComponent/>
    </Container>
  )
}

export default ShopComponent