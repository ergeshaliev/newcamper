import styled from "styled-components";

export const MainCon = styled.div``;

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const CartCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
h2{
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
p{
width: 100px;
height: 3px;
background: #FF7A00;
margin: 0;
margin-top: 10px;
}
`;

export const CartBtn = styled.div`
display: flex;
justify-content: center;
gap: 60px;
margin-top: 20px;
`;

export const LeftCon = styled.div`
display: flex;
justify-content: center;

`;
export const CarWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 811px;
height: 476px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
button{
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 350px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
border: none;
cursor: pointer;
}
`;

export const RightCon = styled.div`
display: flex;
flex-direction: column;
/* flex: 2; */
margin-bottom: 50px;
margin-top: 20px;
`;

export const RightCon1 = styled.div`
h2{
color: var(--text, #373737);
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
h3{
color: var(--blue, #006DAB);
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
margin-top: 15px;
}
h4{
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
margin-top: 25px;
}
p{
width: 311px;
color: rgba(55, 55, 55, 0.70);
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
button{
width: 311px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
margin-top: 150px;
}
`;

export const RightCon2 = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
h2{
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 50px;
}
`;

export const RightW = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
p{
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
margin-left: 10px;
}
input{
width: 311px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`;

export const CardCon = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 55px;
h2{
margin: 0;
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 15px;
}
button{
width: 311px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
cursor: pointer;
margin-top: 35px;
}
`;