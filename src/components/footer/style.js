import styled from "styled-components";

export const Container = styled.div`
/* width: 1366px; */
height: 350px;
flex-shrink: 0;
background: var(--blue, #006DAB);
display: flex;
`;
export const NavCon = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex: 3;
`;

export const LogoCon = styled.div`
flex: 1;
padding: 70px;
margin-top: 25px;
`;
export const Logo = styled.img`
`;
export const ServicesCon = styled.div`
flex: 1;
h5{
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p {
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;
export const MenuCon = styled.div`
flex: 1;
h5{
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;

export const ContactCon = styled.div`
flex: 1;
h5{
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;

export const ContactIcon = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;