import styled from "styled-components";

export const ImageCon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
width: 290px;
height: 167px;
flex-shrink: 0;
}
p{
color: var(--text, #373737);
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
`;

export const DisBtn = styled.div`
display: flex;
margin-top: 10px;
p{
transform: skew(18deg);
color: #FFF;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
button{
width: 259px;
height: 45px;
flex-shrink: 0;
background: var(--blue, #006DAB);
border: none;
cursor: pointer;
transform: skew(-18deg);
}
`;

export const ChooseCon = styled.div`
display: flex;
align-items: center;
gap: 20px;
margin-top: 15px;
img{
width: 15px;
height: 15px;
transform: rotate(360deg);
flex-shrink: 0;
}
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;