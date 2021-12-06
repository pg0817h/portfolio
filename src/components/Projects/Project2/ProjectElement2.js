import styled from "styled-components";

export const Project = styled.div`
  overscroll-behavior-y: none;
`;
export const Container = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`;
export const ScrollContainer = styled.div`
  padding: 160vh 0;
  pointer-events: none;
`;
export const ImgContainer = styled.div`
  width: 700px;
  height: 420px;
  overflow: hidden;
  position: relative;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    margin-top: 50px;
  }
  &:last-child {
    margin-bottom: 50px;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;
export const Img = styled.img`
  width: 100%;
  position: absolute;
`;
export const Outline = styled.span`
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
`;

export const TextContainer = styled.h2`
  text-align: center;
  font-size: 7rem;
  margin: 50px auto;
  @media (max-width: 480px) {
    font-size: 6rem;
  }
`;
