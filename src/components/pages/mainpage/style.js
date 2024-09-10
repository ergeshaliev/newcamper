import styled from "styled-components";
import bg from "../../../assets/bg1.svg"
import elipse from "../../../assets/Ellipse-bg-icon.svg"


export const Container = styled.div`
`;

export const MainCon = styled.div`
margin-bottom: 80px;
`;

export const RecommendCon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const MultiCarouselCon = styled.div`
margin-top: 50px;
`;

export const Recommend1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;
gap: 6px;
text{
color: var(--text, #373737);
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
width: 170px;
height: 2px;
background: #FF7A00;
margin: 0;
}
`;

export const Recommend2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 40px;
`;

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

export const Video1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
margin-top: 80px;
h3{
color: var(--text, #373737);
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
p{
width: 90px;
height: 2px;
background: #FF7A00;
margin: 0;
}
`;

export const Video2 = styled.div`
display: grid;
grid-template-areas:'a a a a';
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 38px;
`;

export const VideoImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
width: 300px;
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat;
`;

export const ElipseImg = styled.div`
background-image: url(${elipse});
background-position: center;
background-repeat: no-repeat;
height: 60px;
width: 60px;
display: flex;
justify-content: center;
align-items: center;
`;

export const BlogsCon = styled.div`
display: flex;
flex-direction: column;
margin-top: 80px;
`;
export const BlogsTxt = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 80px;
gap: 5px;
p{
color: var(--text, #373737);
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
text{
width: 80px;
height: 2px;
background: #FF7A00}
margin: 0;
`;

export const BlogsLeft = styled.div`
display: flex;
flex-direction: column;
h2{
color: #000;
font-size: 29px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h3{
color: var(--sariq, #FF7A00);
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
p{
width: 380px;
height: 107px;
flex-shrink: 0;
color: #000;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
margin-top: 10px;
}
`;

export const BlogsRight = styled.div`
display: grid;
grid-template-areas: 'a a a';
justify-content: center;
align-items: center;
gap: 20px;
`;

export const LeftRightCon = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
`;

export const BlogImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
width: 257px;
height: 258px;
flex-shrink: 0;
}
`;

export const VideoCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;