import React from 'react'
import { Container, Hmenu, HVmenu, Input1, Input2, InputWrapp, ItemCon, Line, MainCon, SortCon, SortText, Vmenu,} from './style'
import hmenu from "../../assets/HMenu.svg"
import vmenu from "../../assets/VMenu.svg"
import str from "../../assets/strelka.svg"

const ItemComponent = () => {
  return (
    <MainCon>
      <Container>
            <ItemCon>
                  <h3>Item</h3>
                  <p>45</p>
            </ItemCon>
            <SortCon>
                  <SortText>
                        <p>Sort by</p>
                  </SortText>
                  <InputWrapp>
                   <Input1>
                    <input type="text" placeholder='Select'/>
                    <p></p>
                    <img src={str} alt="icon" />
                   </Input1>
                   <Input2>
                     <input type="text" placeholder='60' />
                    <p></p>
                    <img src={str} alt="icon" />
                   </Input2>
                   <HVmenu>
                    <Hmenu>
                         <p></p>
                        <img src={hmenu} alt="icon" />
                    </Hmenu>
                     <Vmenu>
                        <p></p>
                        <img src={vmenu} alt="icon" />
                    </Vmenu>
                   </HVmenu>
                  </InputWrapp> 
            </SortCon>
      </Container>
            <Line>
                  <p></p>
            </Line>
    </MainCon>
  )
}

export default ItemComponent