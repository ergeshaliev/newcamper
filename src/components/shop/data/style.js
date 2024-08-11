import styled from "styled-components";

export const Container = styled.div`
flex: 3;
display: flex;
flex-direction: column;
justify-content: center;

`;

export const ItemInfo = styled.div`
display: flex;
height: 50px;
padding: 20px;
margin-left: 15px;

`;

export const ItemLeft = styled.div`
display: flex;
justify-content: baseline;
align-items: center;
flex: 1;
gap: 10px;
p {
color: var(--blue, #006DAB);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
h5{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
`;

export const ItemRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
gap: 15px;
input{
width: 227px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
`;

export const Right2 = styled.div`
display:flex ;
input {
width: 80px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`;
export const Right3 = styled.div`
display: flex;
input {
width: 80px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`;

export const ItemLine = styled.div`
`;

export const ItemWrap = styled.div`
display: flex;
flex-direction: column;
`;

export const CardWrapp = styled.div`
display: grid;
grid-template-areas: 'a a a a';
flex-direction: column;
gap: 20px;
padding: 30px;
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
/* p{
color: var(--text, #373737);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
} */
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
`;


