import styled from "styled-components";
import bg from "../../assets/bg1.svg"
import elipse from "../../assets/Ellipse-bg-icon.svg"

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