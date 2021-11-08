import React,{useState}from 'react';
import Navbar from '../components/Navbar';
import { homeBar } from '../components/Navbar/Data';
import HeroSection from '../components/HeroSection/index.jsx';
import HeroSection2 from '../components/HeroSection/index2.jsx';
import About from '../components/About';
import Projects from '../components/Projects';

const HomePage = ({scrollWindow}) => {
   
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} {...homeBar} scrollWindow={scrollWindow}/>
            <HeroSection2/>
            <About scrollWindow={scrollWindow}/>
            <Projects scrollWindow={scrollWindow}/>
           
        </>
    )
}

export default HomePage;