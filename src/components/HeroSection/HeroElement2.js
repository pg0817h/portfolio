import styled from 'styled-components';

export const Hero = styled.section`
    z-index:10;
    padding-top: 4em;
    padding-bottom: 3em;
    @media screen and (max-width: 767px){
       padding-bottom: 0;
       padding-top: 0;
     }

`
export const HeroContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 13em;
    padding-right: 15em;
    padding-top: 2em;
    @media screen and (max-width: 991px){
        padding-right: 2em;
        padding-top: 3em;
        padding-left: 2em;
    }
`
export const HeroWrapper = styled.div`
    position: relative;
    display: grid;
    height: 500px;
    grid-auto-columns: 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    @media screen and (max-width: 767px){
       grid-template-columns: 1fr;
       height: 700px;
    }

`
export const HeroText = styled.div`
    grid-column-end:3;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
    position: relative;
    z-index: 10;
  
   
    @media screen and (max-width: 767px){
        grid-column-start: span 1;
        grid-column-end: span 1;
        grid-row-start: span 1;
        grid-row-end: span 1;
        font-size: 1.8vw;
    }
    @media screen and (max-width: 479px){
        
        font-size: 2.5vw;
    }
`
export const HeroHeading = styled.div`
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Merriweather', serif;
    font-size: 3em;
    line-height: 1.4;
   
    letter-spacing: -0.05em;
`
export const HeroH1l = styled.span`
    font-size: 1.4em;
    text-align: left;
`
export const Heroh1centerbold = styled.h1`
    font-weight: 700;
    text-align: center;
    
    
 
 
`
export const HeroH1r2 = styled.span`
    text-align: right;
    display:block;
    font-size: 1.4em;
    @media screen and (max-width: 767px){
        text-align: left;
    }
`
export const Heroh1centerred = styled.h1`
    color: #f0122d;
    font-weight: 700;
    text-align: center;
    @media screen and (max-width: 991px){
        padding-top: 0.3em;
    }
`
export const HeroCircleContainer = styled.a`
    position: absolute;
    left: auto;
    top: 50%;
    right: -12%;
    bottom: 0%;
    display: flex;
    width: 6.6em;
    height: 6.6em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #f0122d;
    @media screen and (max-width: 767px){
        display: none;
    }
`

