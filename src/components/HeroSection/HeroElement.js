import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import {motion} from 'framer-motion';
export const HeroContainer = styled.div`
    
    display: flex;
    font-family: 'Merriweather', serif;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1;
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient: 180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
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
    position: absolute;
    margin-left: 9%;
    padding: 8px 24px;
    display: flex;
    
    align-items: start;
`;

export const Herotext = styled.div`

    flex-direction: column;
`
export const HeroH1 = styled.div`
    color: black;
    font-size: 60px;
    text-align: start;
    
    @media screen and (max-width: 768px){
        font-size: 40px;

        @media screen and (max-width: 480px){
            font-size: 32px;
        }
    }
`;


export const HeroP = styled.div`
    margin-top: 15px;
    
    color: black;
    font-size: 50px;
    text-align: start;
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