import styled from "styled-components";

export const  MainCon = styled.div`
display: flex;
flex-direction: column;
gap: 5px;

`;

export const  Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 1060px;
`;

export const  ItemCon = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-left: 5px;
h3{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
margin: 0;
}
p{
color: var(--blue, #006DAB);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
margin: 0;
}
`;
export const  SortCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`;
export const  SortText = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%;
margin: 0;
}
`;

export const  Input1 = styled.div`
display: flex;
align-items: center;
input{
width: 170px;
height: 27px;
flex-shrink: 0;
border-bottom-left-radius: 5px;
border-top-left-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin-right: 5px;
}
p{
width: 30px;
height: 29px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin: 0;
margin-left: -5px;
}
img{
margin-left: -24px;
cursor: pointer;
}
`;
export const  Input2 = styled.div`
display: flex;
align-items: center;
input{
width: 50px;
height: 27px;
flex-shrink: 0;
border-bottom-left-radius: 5px;
border-top-left-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
}
p{
width: 28px;
height: 29px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin: 0;
}
img{
margin-left: -23px;
cursor: pointer;
}
`;
export const  Hmenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
width: 41px;
height: 30px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin: 0;
}
img{
width: 18px;
height: 18px;
flex-shrink: 0;
margin-left: -29px;
cursor: pointer;
}
`;
export const  Vmenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
width: 40px;
height: 30px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
margin: 0;
}
img{
width: 22px;
height: 22px;
flex-shrink: 0;
margin-left: -32px;
cursor: pointer;
}
`;
export const  HVmenu = styled.div`
display: flex;
gap: 11px;
margin-right: 4px;
`;

export const Line = styled.div`
p{
width: 1070px;
height: 1px;
background: rgba(55, 55, 55, 0.50);
margin: 0;
}
`;

export const InputWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 22px;
`;