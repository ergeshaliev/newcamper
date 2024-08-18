import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
`;

export const ContainerWrapp = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const CostWrapp = styled.div`

h4{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
margin: 0;
}
p{
width: 240px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
}
`;

export const FromTo = styled.div`
display: flex;
gap: 25px;
`;

export const FromCon = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%;
input {
width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
}
`;

export const ToCon = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%;
input {
width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
}
`;

export const BrandCon = styled.div`
display: flex;
flex-direction: column;
`;

export const BrandWrap = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
p{
color: #000;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
`;
export const LineCon = styled.div`
width: 240px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
`;

export const TextWrapp = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-top: 30px;
`;

export const AidalCon = styled.div`
display: flex;
justify-content: baseline;
align-items: center;
gap: 8px;
input {
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}
label {
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%;
}
`;

export const BtnWrapp = styled.div`
display: flex;
gap: 15px;
margin-top: 50px;
button{
width: 115.804px;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
background: var(--sariq, #FF7A00);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
border: none;
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;

export const LastCon = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-top: 50px;

`;
export const LastConText = styled.div`
color: var(--blue, #006DAB);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
p{
margin: 0;
}
`;

export const LastConWall = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 76px;
height: 90px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
`;
export const LastWrapp = styled.div`
display: flex;
gap: 7px;
`;
