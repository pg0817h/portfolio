import styled,{keyframes} from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({scrollWindow}) => (scrollWindow ? 'rgb(245, 235, 220)' : 'transparent')};
    font-family: 'Merriweather', serif;
    transition: 0.8s all ease;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`

export const InfoWrapper = styled.div`

    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: flex-start;
`