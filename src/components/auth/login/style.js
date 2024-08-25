import styled from "styled-components";
import bg from "../../../assets/naverbg.svg"
import bg2 from "../../../assets/google-bg.svg"
import bg3 from "../../../assets/kakao-bg.svg"

export const MainCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px;
`;

export const Container = styled.div`
display: flex;
justify-content: center;
width: 500px;
height: 614px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`;
export const InfoWrapper = styled.div`
`;
export const SignIn = styled.div`
h3{
color: var(--text, #373737);
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;

export const Email = styled.div`
p{
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 6px;
}
input{
width: 434px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`;

export const Password = styled.div`
p{
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 6px;
}
input{
width: 434px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`;

export const Forget = styled.div`
display: flex;
align-items: center;
gap: 5px;
margin-left: 10px;
input{
width: 23px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
background: rgba(55, 55, 55, 0.15);
}
h4{
color: #373737;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 100px;
}
`;

export const BtnWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
button{
width: 434px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
border: none;
color: #FFF;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
}
`;

export const LineWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 10px;
`;
export const Line1 = styled.div`
p{
width: 119.017px;
height: 1px;
background: rgba(55, 55, 55, 0.15);
}
`;
export const Line2 = styled.div`
p{
width: 119.017px;
height: 1px;
background: rgba(55, 55, 55, 0.15);
}
`;

export const ImageWrapp = styled.div`
display: flex;
justify-content: center;
gap: 11.5px;
`;

export const Image1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 46px;
height: 46px;
flex-shrink: 0;
background-image: url(${bg});
background-repeat: no-repeat;
cursor: pointer;
`;
export const Image2 = styled.div`
background-image: url(${bg2});
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
width: 47px;
height: 46px;
flex-shrink: 0;
cursor: pointer;
`;
export const Image3 = styled.div`
background-image: url(${bg3});
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
width: 47px;
height: 46px;
flex-shrink: 0;
cursor: pointer;
`;
export const BtnW = styled.div`
margin-top: 25px;
button{
width: 434px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
border: 2px solid var(--blue, #006DAB);
color: var(--blue, #006DAB);
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
}
`;