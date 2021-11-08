import React from 'react'
import './Circle.css';
const Circle = () => {
    return (
        <>
        <div>

        <svg viewBox="0 0 100 100" width="95" height="95" fill="red" className="circle">
           <defs>
                <path 
                    
                    id="circle"
                    d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
               
                  
            </defs>
            
            <text fontSize="17">

            <textPath xlinkHref="#circle" >
           Here are some of my work
            </textPath>
            </text>
            <svg x="25%" y="25%" width="50%" height="50%">
               
            </svg>
           </svg>
        </div>
          
        </>
    )
}

export default Circle
