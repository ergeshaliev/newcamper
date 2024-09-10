import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const CardWrapp = styled.div`
display: grid;
grid-template-areas: 'a a a a';
flex-direction: column;
gap: 20px;
margin-top: 30px;
`;

export const CartWrapp = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 15px;
width: 223px;
height: 307px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
img{
display: flex;
justify-content: center;
align-items: center;
}
h3 {
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
h4{
color: var(--blue, #006DAB);
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
margin-top: 10px;
}
button{
display: flex;
justify-content: center;
align-items: center;
width: 105px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: var(--blue, #006DAB);
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;
export const BrandRang = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const BranWrapp = styled.div`
display: flex;
p{
color: var(--text, #373737);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;
export const BrandStar = styled.div`
display: flex;
justify-content: end;
p{
color: var(--text, #373737);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;

export const BtnWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 16px;
color: white;
margin-top: 8px;
:hover{
background-color: #006DAB;
color: #FFF;
}
`;



