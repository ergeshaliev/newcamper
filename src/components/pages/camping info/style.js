import styled from "styled-components";

export const MainCon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Header = styled.div`
display: flex;
flex-direction: column;
height: 1140px;
width: 1220px;
margin-top: 40px;
`;

export const ImageCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
img{
width: 194px;
height: 147px;
flex-shrink: 0;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
`;
 
export const InfoCon = styled.div`
display: flex;
flex-direction: column;
gap: 11px;
margin-top: 20px;
h3{
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
`;

export const TextCon = styled.div`
display: flex;
align-items: center;
gap: 20px;
p{
color: var(--blue, #006DAB);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
}
button{
width: 120px;
height: 25px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid var(--sariq, #FF7A00);
color: var(--sariq, #FF7A00);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;

export const Line = styled.div`
display: flex;
justify-content: center;
p{
width: 1226px;
height: 1px;
background: rgba(55, 55, 55, 0.20);
}
`;
export const Information = styled.div`
display: flex;
justify-content: baseline;
align-items: center;
gap: 100px;
`;
export const InfoWrapp = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
margin-top: 6px;

`;

export const Info1 = styled.div`
display: flex;
align-items: center;
gap: 10px;
img{
width: 20px;
height: 20px;
flex-shrink: 0;
}
p{
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;

export const Info2 = styled.div`
display: flex;
align-items: center;
gap: 10px;
img{
width: 20px;
height: 20px;
flex-shrink: 0;
}
P{
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;

export const Info3 = styled.div`
display: flex;
align-items: center;
gap: 10px;
img{
width: 20px;
height: 20px;
flex-shrink: 0;
}
p{
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;

export const Info4 = styled.div`
display: flex;
align-items: center;
gap: 10px;
p{
color: var(--blue, #006DAB);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
img{
width: 20px;
height: 20px;
flex-shrink: 0;
}
`;

export const TextBox = styled.div`
display: flex;
flex-direction: column;
margin-top: 22px;
gap: 10px;
h3{
color: var(--blue, #006DAB);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
}
p{
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;

export const ImgBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
img{
width: 1220px;
height: 552px;
flex-shrink: 0;
}
`;