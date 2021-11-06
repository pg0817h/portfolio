import React,{useState} from 'react';
import {HeroContainer, Herotext,HeroBg, VideoBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElement';
import {motion} from 'framer-motion';
import img from '../../static/abbyChun.jpg';
import { BottonR } from '../UI/ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
 
    return (
        <HeroContainer>
           
            <HeroContent>
            <Herotext>
                <HeroH1>
                <motion.div
                 animate={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ duration: 0.7 }}
                >Hi, I'm Abby Chun</motion.div>
                </HeroH1>
                
                <HeroP>
                <motion.div
                 animate={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ duration: 0.7, delay: 0.7 }}
                >I build things for the web.</motion.div>
                </HeroP>
            </Herotext>

          <motion.img 
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{width: "30%", height: "30%"}} 
            src={img}/>
            </HeroContent>
        </HeroContainer>
    )
    
}

export default HeroSection;