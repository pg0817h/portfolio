import React, { useRef, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  Container,
  ScrollContainer,
  ImgContainer,
  Img,
  Outline,
  TextContainer,
  Project,
} from "./ProjectElement2";
import img1 from "../../../static/project1.png";
const Project2 = () => {
  const size = useWindowSize();

  const projectApp = useRef();
  const sContainer = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);
  useEffect(() => {
    setHeight();
  }, [size.height]);

  const setHeight = () => {
    document.querySelector("#project").style.height = `${
      sContainer.current.getBoundingClientRect().height - 2500
    }px`;
  };

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;

    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;

    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 10;

    //Assign skew and smooth scrolling to the scroll container
    sContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    sContainer.current.style.color = "red";
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <Project id="project">
      <Container ref={projectApp}>
        <ScrollContainer ref={sContainer}>
          <ImgContainer>
            <Img src={img1}></Img>
          </ImgContainer>
          <TextContainer>
            What To Eat<Outline>Today</Outline>
          </TextContainer>
          <ImgContainer>
            <Img src={img1}></Img>
          </ImgContainer>
          <TextContainer>
            <Outline>Bookend</Outline>
          </TextContainer>
          <ImgContainer>
            <Img src={img1}></Img>
          </ImgContainer>
          <TextContainer>
            Restaurant<Outline>Buddy</Outline>
          </TextContainer>
        </ScrollContainer>
      </Container>
    </Project>
  );
};

export default Project2;
