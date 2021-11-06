import React,{useState} from 'react'
import { FiChevronDown } from 'react-icons/fi';
import {motion, AnimatePresence} from 'framer-motion';

const Sidebar = ({node}) => {
    const variants = {
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
    }
    const transition={
        duration: 0.8, 
        ease: [0.04, 0.62, 0.23, 0.98] 
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <li>
                <motion.div initial ={false} onClick={()=> setIsOpen(!isOpen)}>
                    <FiChevronDown />
                     {node.title}
                </motion.div>
               
                <AnimatePresence initial={false}>
                    {node.children.length > 0 && isOpen && (
                        <motion.ul
                            className="submenu"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={variants}
                            transition={transition}
                        >
                            {node.children.map((submenu,index) => {
                                return <li key={index}>{submenu.title}</li>
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>
        </>
    )
}

export default Sidebar;
