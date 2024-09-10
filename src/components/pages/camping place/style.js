import styled from "styled-components";
import bg from "../../../assets/camping-place.png"

export const Container = styled.div`
background-image: url(${bg});
height: 350px;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 38px;
h2{
color: #FFF;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
p{
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
}
`;


export const MainCon = styled.div``;

export const ImgWrapp = styled.div`
display: grid;
grid-template-areas: 'a a a';
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 80px;
margin-bottom: 80px;
`;

export const ImgCon = styled.div`
display: flex;
flex-direction: column;
justify-content: baseline;
margin-top: 25px;
cursor: pointer;
h4{
color: var(--text, #373737);
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
margin-top: 15px;
}
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
margin-top: 5px;
}
img{
width: 395px;
height: 300px;
flex-shrink: 0;
border-radius: 10px;
}
`;