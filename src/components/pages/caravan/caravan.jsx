import React from 'react'
import { Container, MainCon } from './style'
import WallpaperComponent from '../../wallpaper'
import ShopComponent from '../../shop/shop'

const CaravanComponent = () => {
  return (
    <MainCon>
     <Container>
       <p>Home / Caravan</p>
       <h3>Our ranges</h3>
       <h2>Caravan</h2>
     </Container>
     <ShopComponent/>
    </MainCon> 
  )
}

export default CaravanComponent