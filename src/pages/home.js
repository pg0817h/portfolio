import React,{useState}from 'react';
import Navbar from '../components/Navbar';
import { homeBar } from '../components/Navbar/Data';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
const HomePage = ({scrollWindow}) => {
   
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} {...homeBar} scrollWindow={scrollWindow}/>
            <HeroSection/>
            <About scrollWindow={scrollWindow}/>
            <About scrollWindow={scrollWindow}/>
        </>
    )
}

export default HomePage;