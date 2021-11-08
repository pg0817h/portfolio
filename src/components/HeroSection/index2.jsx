import React,{useState,useEffect} from 'react';
import {motion,useAnimation, useViewportScroll, useTransform} from 'framer-motion';
import {Hero,HeroContainer,HeroWrapper,HeroText,HeroHeading,HeroH1l,Heroh1centerbold,HeroH1r2,Heroh1centerred,HeroCircleContainer} from './HeroElement2';
import img from '../../static/abbyChun.jpg';
import Circle from '../Circle/Circle';

const HeroSection2 = () => {
  const [y1, setY] = useState(0);
  const [y2,setY2] = useState(0);
  const [y3,setY3] = useState(0);
  const [didUpdate,setUpdate] = useState(false);
  
  useEffect(()=>{
    setUpdate(true);
   window.addEventListener("scroll",()=> {
     console.log(window.scrollY)
     if(window.scrollY < 54){
     setY(window.scrollY/100)
     }
     if(window.scrollY < 90){
      setY2(window.scrollY/100)
     }
     if(window.scrollY < 160) {
      setY3(window.scrollY/100)
     }
    

   })
   return () => {
     window.removeEventListener("scroll",()=>{})
   }
  
  
  },[])

  return(
    <Hero>

<HeroContainer>
        <HeroWrapper>
            <HeroText>
                <HeroHeading>
                <HeroH1l
                  >
               <motion.div
              
               animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              
           

             >Hi, I'm Geonhyeong</motion.div>
               </HeroH1l>
               <Heroh1centerbold
                  style={didUpdate ? {
                    transformStyle: 'preserve-3d',
                    transform:  `translate3d(0px, ${-0.092815-y1}em,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)`
                    /*translate3d(0px, -0.092815em-${y1},0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg) */
                  } : {}}
               >
               <motion.div
                 animate={ { opacity: 1, y: 0 }}
                 initial={ { opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}
                
                 transition={{ duration: 0.8, delay: 0.8 }}
                >OR Abby</motion.div>
               </Heroh1centerbold>
               <HeroH1r2
                 style={didUpdate ? {
                  transformStyle: 'preserve-3d',
                  transform:  `translate3d(0px, ${-0.434025-y2}em,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)`
                  /*translate3d(0px, -0.092815em-${y1},0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg) */
                } : {}}>
               <motion.div
                 animate={ { opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}

                 transition={{ duration: 0.8, delay: 0.8 }}
                >I build things for</motion.div>
               </HeroH1r2>
                <Heroh1centerred
                   style={didUpdate ? {
                    transformStyle: 'preserve-3d',
                    transform:  `translate3d(0px, ${-0.824425-y3}em,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)`
                    /*translate3d(0px, -0.092815em-${y1},0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg) */
                  } : {}}>
                <motion.div
                 animate={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -20 }}
                 exit={{ opacity: 0, y: 20 }}
                 
                 transition={{ duration: 0.8, delay: 0.8 }}
                >the web.</motion.div>
                </Heroh1centerred>
                    <HeroCircleContainer>
                    <Circle/>
                    </HeroCircleContainer>
                </HeroHeading>
               
            </HeroText>
           
                <motion.img 
                className="Heroimg"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                src={img}/>
           

          
        </HeroWrapper>
    </HeroContainer>
    </Hero>
   
  )
}

export default HeroSection2;