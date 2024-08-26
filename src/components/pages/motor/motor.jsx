import React from 'react'
import WallpaperComponent from '../../wallpaper'
import FilterComponent from '../../shop/filter/filter'
import ItemComponent from '../../item/item'
import { Container, DataWrapp, MainCon } from './style'
import DataComponent from '../../shop/data/data'

const MotorComponent = () => {
  return (
    <MainCon>
      <WallpaperComponent/>
      <Container>
       <FilterComponent/>
       <DataWrapp>
        <ItemComponent/>
        <DataComponent/>
       </DataWrapp>
      </Container>
    </MainCon>
  )
}

export default MotorComponent