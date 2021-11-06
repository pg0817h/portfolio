import React, {useState,useEffect}from 'react';
import {FaBars} from 'react-icons/fa';

import {animateScroll as scrollTop} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElement';

const Navbar = ({toggle,logoLink,logoContent,linktoOne,linktoTwo,linktoThree,contentOne,contentTwo,contentThree, signoutLink,scroll}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 800){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",changeNav)
        //component will unmount
        return() => {
            window.removeEventListener("scroll",changeNav)
        }
    }, [])

    const toggleHome = () => {
        scrollTop.scrollToTop();
    }
   
    return (
        
          <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to ={logoLink}  onClick={toggleHome} scrollnav={scrollNav ? 1 : 0}>
                       {logoContent}
                    </NavLogo>
                    <MobileIcon  onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                    to ={linktoOne}
                                    scrollnav={scrollNav ? 1 : 0}
                                    smooth={true} duration={500} spy={true}
                                    exact='true' offset={-80} >{contentOne}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to ={linktoTwo}
                                scrollnav={scrollNav ? 1 : 0}
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80} >{contentTwo}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to = {linktoThree}
                                scrollnav={scrollNav ? 1 : 0}
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}>{contentThree}</NavLinks>
                        </NavItem>
                      
                       
                        
                    </NavMenu>
                  
                     
                   
                 
                    
                </NavbarContainer>
            </Nav>
    
    )
}
export default Navbar;