import React from 'react'
import { AidalCon, BrandCon, BrandWrap, BtnWrapp, Container, ContainerWrapp, CostWrapp, FromCon, FromTo, LastCon, LastConText, LastConWall, LastWrapp, LineCon, TextWrapp, ToCon, } from './style'
import strelka from "../../../assets/strelka.svg"
import lastconimg from "../../../assets/lastconicon.svg"
import { Link } from 'react-router-dom'

const FilterComponent = () => {
  return (

    <Container>
      <ContainerWrapp>
        <CostWrapp>
          <h4>Cost of car</h4>
          <p></p>
        </CostWrapp>
        <FromTo>
          <FromCon>
            <label htmlFor="">From</label>
            <input type="text" />
          </FromCon>
          <ToCon>
          <label htmlFor="">To</label>
          <input type="text" />
          </ToCon>
        </FromTo>
        <BrandCon>
        <BrandWrap>
        <p>Brand</p>
        <img src={strelka} alt="icon" />
        </BrandWrap>
        <LineCon> 
        </LineCon>
        <TextWrapp>
          <AidalCon>
             <input type="checkbox" />
             <Link to = {"/aidal"}>
             <label htmlFor="">Aidal</label>
             </Link>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">Knal</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">escape</label>
          </AidalCon>
        </TextWrapp>
        </BrandCon>
        <BrandCon>
        <BrandWrap>
        <p>Company</p>
        <img src={strelka} alt="icon" />
        </BrandWrap>
        <LineCon> 
        </LineCon>
        <TextWrapp>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">escape</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">Aidal</label>
          </AidalCon>
        </TextWrapp>



        </BrandCon>
        <BrandCon>
        <BrandWrap>
        <p>License type</p>
        <img src={strelka} alt="icon" />
        </BrandWrap>
        <LineCon> 
        </LineCon>
        <TextWrapp>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">1year</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">2year</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">1.5year</label>
          </AidalCon>
        </TextWrapp>



        </BrandCon>
        <BrandCon>
        <BrandWrap>
        <p>Number of travelers</p>
        <img src={strelka} alt="icon" />
        </BrandWrap>
        <LineCon> 
        </LineCon>
        <TextWrapp>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">2</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">3-4</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">5+</label>
          </AidalCon>
        </TextWrapp>



        </BrandCon>
        <BrandCon>
        <BrandWrap>
        <p>Location</p>
        <img src={strelka} alt="icon" />
        </BrandWrap>
        <LineCon> 
        </LineCon>
        <TextWrapp>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">Seoul</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">Korea</label>
          </AidalCon>
          <AidalCon>
            <input type="checkbox" />
            <label htmlFor="">Busan</label>
          </AidalCon>
        </TextWrapp>

        </BrandCon>
        <BtnWrapp>
          <button>Cancel</button>
           <button style={{backgroundColor:"#006DAB"}}>Search</button>
        </BtnWrapp>
        <LastCon>
          <LastConText>
            <p>Compare</p>
          </LastConText>
          <LastWrapp>
            <LastConWall>
              <img src={lastconimg} alt="" />
            </LastConWall>
            <LastConWall>
              <img src={lastconimg} alt="" />
            </LastConWall>
            <LastConWall>
              <img src={lastconimg} alt="" />
            </LastConWall>
          </LastWrapp>  


        </LastCon>
        


      </ContainerWrapp>


    </Container>
    
  )
}

export default FilterComponent