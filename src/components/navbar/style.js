import styled from "styled-components";



export const Container = styled.div`
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
height: 30px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
`;
export const LeftCon = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`;
export const Logo = styled.img`
cursor: pointer;
color: var(--blue, #006DAB);
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const MidCon = styled.div`
flex: 3;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;

p{
cursor: pointer;
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`;
export const MotoCon = styled.div`
display: flex;
gap: 5px;
`;


export const RightCon = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
img{
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}
p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;

export const Input1 = styled.div`
display: flex;
gap: 8px;
`;

