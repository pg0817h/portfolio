import React from 'react'
import img from '../../../static/project1.png';
import {InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img} from './ProjectElement.js';
const Project = ({imgStart,topLine,heading,img}) => {
    return (
        <>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading>{heading}</Heading>
                        <Subtitle></Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </>
    )
}

export default Project;
