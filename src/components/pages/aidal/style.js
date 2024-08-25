import styled from "styled-components";
import bg from "../../../assets/aidal-bg-img.svg"

export const MainCon = styled.div`
display: flex;
flex-direction: column;
`;

export const Container = styled.div`
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 900px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
p{
width: 509.208px;
height: 76.407px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
`;

export const BtnCon = styled.div`
display: flex;
gap: 15px;
button{
width: 181.5px;
height: 50.014px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
cursor: pointer;
margin-top: 40px;
}
`;

export const Wrapper = styled.div`
height: 5000px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Con1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
margin-right: 50px;
`;
export const Con1Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const Con1Right = styled.div`
width: 600px;
height: 360px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 5px;
`;
export const Con1RightTop = styled.div`
display: flex;
align-items: center;

`;
export const Topleft = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: baseline;
margin-left: 20px;
gap: 10px;
h3{
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
p{
color: #000;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}

`;
export const TopRight = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
h3{
color: #006DAB;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;
export const LineW = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
width: 560px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
margin: 0;
}
`;

export const TextLeft = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 10px;
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
}
`;
export const TextRight = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 10px;
p{
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`;

export const Con1RightBtn = styled.div`
display: flex;
justify-content: baseline;
align-items: center;
padding: 20px;
`;

export const Con2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 70px;
`;

export const Con2Left = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
margin: 40px;
margin-bottom: 80px;
h3{
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
margin-right: 400px;
}
p{
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 24px;
margin: 0;
}

`;
export const Con2Right = styled.div`
display: flex;
align-items: center;
`;

export const Con3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 70px;

`;
export const Con3Left = styled.div`
display: flex;
align-items: baseline;
`;
export const Con3Right = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-left: 20px;
margin: 63px;
h3{
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
p{
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin: 0;
}
`;

export const Con4 = styled.div`
display: flex;
gap: 65px;
`;
export const Con4Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
margin: 20px;
h3{
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
p{
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin: 0;
}
`;
export const Con4Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const Con5 = styled.div`
display: flex;
gap: 70px;

`;

export const Con5Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const Con5Right = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 50px;
gap: 20px;
h3{
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
p{
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin: 0;
}

`;


export const Con6 = styled.div`
display: flex;
gap: 90px;
`;

export const Con6Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
gap: 20px;
h3{
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
margin-right: 190px;
}
p{
width: 533px;
height: 169px;
flex-shrink: 0;
flex-shrink: 0;
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin: 0;
}
`;
export const Con6Right = styled.div`
display: flex;
justify-content: center;
`;

export const BtnLeft = styled.div`
display: flex;
button{
width: 180px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
border: none;
color: white;
}
`;
export const BtnRight = styled.div`
display: flex;
button{
width: 180px;
height: 50px;
border-radius: 10px;
border: 2px solid #006DAB;
border-color: #006DAB;
color: #006DAB;
}
`;

export const BtnWrapp = styled.div`
display: flex;
justify-content: baseline;
gap: 20px;
margin-top: 20px;
margin-right: 160px;
`;