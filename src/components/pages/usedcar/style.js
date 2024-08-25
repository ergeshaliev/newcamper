import styled from "styled-components";
import bg from "../../../assets/Used-car-BN.jpeg"

export const Container = styled.div`
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 350px;
gap: 5px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
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


export const MainCon = styled.div``;