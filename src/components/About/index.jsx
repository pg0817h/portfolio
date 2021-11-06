import React from 'react'
import img from '../../static/abbyChun.jpg';
import {motion,useCycle}  from 'framer-motion';
import {InfoContainer,RssBlock,CnnContents,Sliding1,Sliding2,Contentdata1,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img} from './AboutElement';
import Sidebar from '../Sidebar';
import {menu} from "../Sidebar/data";
const About = ({scrollWindow}) => {
   const [x,setX] = useCycle(-50,-20,30,30)
    return (
        <>
          <InfoContainer scrollWindow={scrollWindow} id="about">
            <InfoWrapper>
                
                   
               
                <InfoRow imgStart={false}>
                    <Column1>
                        <TopLine>
                            <RssBlock style={{width: '90px'}}>
                                <CnnContents>
                                    <Sliding1>service</Sliding1>
                                    <Sliding2>service</Sliding2>
                                </CnnContents>
                            </RssBlock>
                        </TopLine>
                       <ul>
                            {menu.map((menuItem,index)=> {
                                return <Sidebar node={menuItem} key={index} />
                            })}   
                        </ul>   
                    </Column1>   
                    <Column2>
                    <TopLine>
                            <RssBlock style={{width: '76px'}}>
                                <CnnContents>
                                    <Sliding1>about</Sliding1>
                                    <Sliding2>about</Sliding2>
                                </CnnContents>
                            </RssBlock>
                        </TopLine>  
                      <TextWrapper>
                          <Subtitle darkText={true}>{Contentdata1}</Subtitle>
                          
                      </TextWrapper>
                    </Column2> 
                </InfoRow>    
            </InfoWrapper>    
            
          
          </InfoContainer>  
          
        </>
    )
}

export default About;
