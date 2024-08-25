import styled from "styled-components";

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
height: 530px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`;
export const RegisterWrapp = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;
export const Register = styled.div`
display: flex;
justify-content: space-between;
h3{
color: var(--text, #373737);
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
img{
cursor: pointer;
}
`;
export const Email = styled.div`
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
margin-left: 6px;
}
input{
width: 440px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`;
export const Password = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 20px;
p{
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
margin-left: 6px;
}
input{
width: 440px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`;
export const Password2 = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 20px;
p{
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
margin-left: 6px;
}
input{
width: 440px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`;

export const KeepCon = styled.div`
display: flex;
align-items: center;
justify-content: baseline;
gap: 5px;
margin-left: 8px;
/* margin-top: 5px; */
input{
width: 23px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
background: rgba(55, 55, 55, 0.15);
}
p{
color: #373737;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
font-family: "Open Sans";
}
`;

export const BtnWrapp = styled.div`
display: flex;
margin-top: 13px;
button{
width: 440px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
color: #FFF;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
cursor: pointer;
}
`;