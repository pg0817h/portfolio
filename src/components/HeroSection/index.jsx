import React,{useState,useEffect} from 'react';
import {HeroContainer, Column1,Column2,HeroRow,Herotext,HeroWrapper,HeroBg, VideoBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElement';
import {motion,useAnimation} from 'framer-motion';
import img from '../../static/abbyChun.jpg';
import { BottonR } from '../UI/ButtonElement';
import Circle from '../Circle/Circle';
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    const imgAnimation = useAnimation()
    const handleMouseMove = e => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    const offsetFactor = 10
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    })
  }
  useEffect(()=>{
    setHover(true)
  },[])

    return (
        <HeroContainer>
           <HeroWrapper>
            <HeroContent>
              <HeroRow>
              <Column1>
              <Herotext>
                <HeroH1>
                <motion.div
              
                 animate={hover? imgAnimation : { opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ duration: 0.8 }}
                 onMouseMove={e => handleMouseMove(e)}

                >Hi,<div style={{fontSize: '50px', textAlign:'center'}}>I'm Abby Chun</div></motion.div>
                </HeroH1>
                
                <HeroP>
                <motion.div
                 animate={hover? imgAnimation : { opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}
                 onMouseMove={e => handleMouseMove(e)}

                 transition={hover? {duration: 0.7, delay: 0.4}:{ duration: 0.8, delay: 0.8 }}
                >I build things for <span style={{fontWeight:"bold", color:"red"}}>the web.</span></motion.div>
                </HeroP>
                <Circle/>
            </Herotext>

              </Column1>
        <Column2>
        <motion.img 
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }}
            className="Heroimg"
            transition={{ duration: 0.5 }}
          
            src={img}/>
        </Column2>
         
            </HeroRow>
            </HeroContent>
            
            </HeroWrapper>
        </HeroContainer>
    )
    
}

export default HeroSection;