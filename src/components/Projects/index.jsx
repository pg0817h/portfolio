import React from 'react'
import Project from './Project';
import {project1, project2, project3} from './Data';
import {InfoContainer,InfoWrapper} from './ProjectsElement';
const Projects = ({scrollWindow}) => {
    return (
        <>
            <InfoContainer scrollWindow={scrollWindow} id='project'>
                <InfoWrapper>
                    <Project {...project1}/>
                   
                </InfoWrapper>
                <InfoWrapper>
                    <Project {...project2}/>
                   
                </InfoWrapper>
                <InfoWrapper>
                    <Project {...project3}/>
                   
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Projects
 