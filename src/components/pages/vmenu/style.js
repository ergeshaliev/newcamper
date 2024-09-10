import styled from "styled-components";

export const Header = styled.div`
display: flex;
justify-content: center;
`;
export const Wallpaper = styled.div``;


export const MainCon = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 30px;
margin-bottom: 50px;
`;

export const Container = styled.div`
display: flex;
width: 1050px;
height: 180px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`;

export const ImgWrapp = styled.div`
flex: 2;
display: flex;
justify-content: center;
align-items: center;
`;
export const TextWrapp = styled.div`
flex: 3;
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
`;

export const TextCon1 = styled.div`
display: flex;
justify-content: space-between;
h3{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
}
p{
color: var(--blue, #006DAB);
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
margin-right: 5px;
}
`;

export const TextCon2 = styled.div`
display: flex;
justify-content: space-between;
h3{
color: var(--text, #373737);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
p{
color: var(--text, #373737);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
margin-right: 10px;
}
img{
display: flex;
margin-left: 480px;
}
`;

export const BtnWrapp = styled.div`
display: flex;
gap: 15px;
margin-top: 40px;
button{
width: 291.325px;
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


export const  ItemWrap = styled.div`
display: flex;
flex-direction: column;
`;

export const ItemInfo = styled.div`
display: flex;
align-items: center;
`;
export const ItemLeft = styled.div`
flex: 1;
display: flex;
justify-content: baseline;
align-items: center;
gap: 10px;
h4{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
p{
color: var(--blue, #006DAB);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}
`;
export const ItemRight = styled.div`
flex: 3;
display: flex;
justify-content: right;
align-items: center;
gap: 25px;
margin-right: 10px;
`;

export const SortCon1 = styled.div`
h3{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%;
}
`;
export const SortCon2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
input{
width: 230px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
p{
width: 30px;
height: 32px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-left: -32px;
}
img{
margin-left: -24px;
}
`;
export const SortCon3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
input{
width: 80px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
p{
width: 30px;
height: 32px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-left: -31px;
}
img{
margin-left: -23px;
}
`;
export const SortCon4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const Hmenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
width: 41px;
height: 32px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
img{
margin-left: -30px;
}
`;
export const Vmenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
width: 41px;
height: 32px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
img{
margin-left: -32px;
}
`;

export const ItemLine = styled.div`
width: 1050px;
height: 1px;
background: rgba(55, 55, 55, 0.50);
p{
margin: 0;
}
`;
export const Body = styled.div`
display: flex;
justify-content: center;
`;
export const DataWrapp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
align-items: start;
padding: 55px;
`;
