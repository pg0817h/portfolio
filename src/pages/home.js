import React,{useState}from 'react';
import Navbar from '../components/Navbar';
import { homeBar } from '../components/Navbar/Data';

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} {...homeBar}/>
        </>
    )
}

export default HomePage;