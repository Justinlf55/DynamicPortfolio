import React, { useState } from 'react';
import Title from './Title';
import Project from './Project';
import { projectsData } from '../props';

interface ProjectsProps {
    onClick: (modalProps: { title: string, children: React.ReactNode }) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onClick }) => {
    const [hovered, setHovered] = useState<Number | null>(null);

    const computeScale = (id: Number) => {
        if (hovered) {
            return hovered === id ? 1.1 : 0.9;
        }
        return 1;
    };

    const getMarginClass = (index: number) => {
        if (hovered !== null) {
            if (hovered === projectsData[index].id) {
                return index % 2 === 0 ? 'ml-10' : 'mr-10';
            }
        }
        return '';
    };

    return (
        <div id='Projects' className='flex flex-col justify-center sm:px-6'>
            <Title first='Explore' second='Projects' fontSize='7xl' />
            <div className='mt-6 flex flex-wrap justify-between sm:pb-36 sm:justify-center'>
                {projectsData.map((project, index) => (
                    <div 
                        className={`w-[48%] mb-8 sm:w-full transition-all duration-700 ease-in-out ${getMarginClass(index)} sm:flex sm:justify-center`}
                        onMouseEnter={() => setHovered(project.id)} 
                        onMouseLeave={() => setHovered(null)}
                        key={project.id}
                    >
                        <Project
                            features={project.features}
                            name={project.name}
                            tnPath={project.tnPath}
                            gifPath={project.gifPath}
                            overview={project.overview}
                            stack={project.stack}
                            scale={computeScale(project.id)}
                            onClick={onClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
