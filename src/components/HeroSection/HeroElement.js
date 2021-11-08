import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import {motion} from 'framer-motion';
export const HeroContainer = styled.div`
font-family: 'Patua One', cursive;
color: #fff;
background: ${({scrollWindow}) => (scrollWindow ? 'rgb(245, 235, 220)' : '#fffaf2')};
font-family: 'Merriweather', serif;
transition: 0.8s all ease;
@media screen and (max-width: 768px){
    padding: 100px 0;
}
@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
 position:relative; 
`
export const HeroWrapper = styled.div`

    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-start;
`
export const HeroRow = styled.div`

    display: grid;
    grid-auto-columns: minmax(80%, auto);
    // align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) {
        grid-auto-columns: minmax(auto, 1fr);
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` :`'col1 col1' 'col2 col2'` )}
    }
`

export const Column1 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    margin-top: 15%;
  


`
export const Column2 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    margin-top: 15%;
  


    
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


export const VideoBg = styled.video`
    width : 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
  
  
    display: flex;


    align-items: start;
`;

export const Herotext = styled.div`


    flex-direction: column;
`
export const HeroH1 = styled.div`
    

    color: black;
    font-size: 80px;
    text-align: start;
   
   z-index:3;
    @media screen and (max-width: 768px){
        font-size: 40px;

        @media screen and (max-width: 480px){
            font-size: 32px;
        }
    }
`;


export const HeroP = styled.div`
    margin-top: 15px;
  
    text-align:right;
    color: black;
    font-size: 60px;
   
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480){
        font-size: 18px;
    }
`;
export const HeroP2 = styled.p`
    margin-top: 15px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480){
        font-size: 18px;
    }
`;
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward =styled(MdArrowForward)`

    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`