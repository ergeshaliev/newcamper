import styled from "styled-components";
import bg from "../../../assets/caravanBN.jpeg"

export const Container = styled.div`
background-image: url(${bg});
background-repeat: no-repeat;
height: 350px;
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
gap: 5px;
h2{
color: #FFF;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
h3{
color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
p{
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
}
`;

export const MainCon = styled.div`

`;

