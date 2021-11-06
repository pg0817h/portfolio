
import './App.css';

import Homepage from './pages/home';
import {useState,useEffect} from 'react';
import Loader from './components/Loader/Loader';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {BrowserRouter as Router,Route,Switch, useParams, Redirect} from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const [scrollWindow, setScroll] = useState(false);
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  const changeY = () => {
    if(window.scrollY >= 800){
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  useEffect(()=>{
   
    window.addEventListener("scroll", changeY)
    return () => {
      window.removeEventListener("scroll",changeY)
    }
  },[])
 
  return (
   
    // <AnimatePresence>
    // {loading ? 
    //  <Loader setLoading={setLoading}/>
    // :
    //   <Homepage scroll={scrollWindow}/>
     
    // }
    // </AnimatePresence>
    <><Homepage scrollWindow={scrollWindow}/></>
  );
}

export default App;
