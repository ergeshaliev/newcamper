import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;

`;

export const ItemInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:16px;

`;

export const ItemLeft = styled.div`
display: flex;
justify-content: baseline;
align-items: center;
gap: 10px;
flex: 1;
p {
color: var(--blue, #006DAB);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
margin: 0;
}
h5{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
margin: 0;
}
`;

export const ItemRight = styled.div`
display: flex;
justify-content: right;
align-items: center;
gap: 15px;
flex: 1;
input{
width: 200px;
height: 31px;
flex-shrink: 0;
border-radius: 0px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`;

export const SortCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%;
margin: 0;
}
`;
export const Input1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
p {
margin: 0;
width: 30px;
height: 33px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-left: -15px;
}
img{
margin-left: -23px;
}
`;

export const Input2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
margin: 0;
width: 30px;
height: 33px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(80, 70, 70, 0.30);
margin: 0;
}
img{
display: flex;
justify-content: center;
align-items: center;
margin-left: -23px;
}
`;

export const Right2 = styled.div`
display:flex ;
margin-left: 10px;
input{
width: 55px;
height: 31px;
flex-shrink: 0;
border-radius: 0px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
`;
export const Right3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-left: 10px;
`;
export const Input3 = styled.div`
display: flex;
p{
width: 41px;
height: 33px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin: 0;
}
img{
margin-left: -28px;
}
`;
export const InputImg = styled.div`
display: flex;
p{
width: 40px;
height: 33px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin: 0;
}
img{
margin-bottom: -12px;
margin-left: -33px;
}

`;

export const ItemLine = styled.div`
p{
width: 1070px;
height: 1px;
background: rgba(55, 55, 55, 0.50);
margin: 0;
}
`;

export const ItemWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
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
`;


