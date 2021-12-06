import styled, { keyframes } from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ scrollWindow }) =>
    scrollWindow ? "rgb(245, 235, 220)" : "#fffaf2"};
  font-family: "Merriweather", serif;
  transition: 0.8s all ease;
  @media screen and (max-width: 768px) {
    height: 900px;
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: flex-start;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  // align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  margin-top: 28%;
`;
export const Contentdata1 =
  "Hello! My name is Abby Chun and I enjoy creating things that live on the internet.";
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  margin-top: 28%;
  @media (max-width: 480px) {
    margin-top: 4%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: rgb(214, 35, 0);
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "rgb(80,35,20)")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

/*
  0%, 33.33% {
    top: -100%;
    opacity: 0;
  }
  33.33%, 50% {
    top: 25%;
    opacity: 1;
  }
  50%, 100% {
    top: 110%;
    opacity: 0;
  }
*/
const loop1 = keyframes`
0% {-webkit-transform: translateX(100%);}
100% {-webkit-transform: translateX(-100%);}
`;
const loop2 = keyframes`
0% {-webkit-transform: translateX(0%);}
100% {-webkit-transform: translateX(-200%);}
`;
export const RssBlock = styled.div`
  height: 80px;

  overflow: hidden;
`;
export const CnnContents = styled.div`
  width: 100%;
  padding-top: 20px;
  margin: 0 auto;

  white-space: nowrap;
`;
export const Sliding1 = styled.span`
  width: 100%;
  text-decoration: underline;
  color: black;
  -webkit-animation: ${loop1} 10s infinite linear;
  animation: ${loop1} 10s infinite linear;
  display: inline-block;
`;
export const Sliding2 = styled.span`
  width: 100%;
  text-decoration: underline;
  color: black;
  -webkit-animation: ${loop2} 10s infinite linear;
  animation: ${loop2} 10s infinite linear;
  display: inline-block;
  animation-delay: 5s;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
