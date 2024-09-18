import React, { useState } from 'react';
import Image from 'next/image';

import ProjectCard from './ProjectCard';

interface ProjectProps {
    name: string;
    gifPath: string;
    tnPath: string;
    overview: string;
    stack: {
        [key: string]: string;
    };
    features: {
        [key: string]: string;
    };
    onClick: (modalProps: { title: string, children: React.ReactNode }) => void;
    scale: number;
}

const Project: React.FC<ProjectProps> = ({
    onClick,
    gifPath,
    tnPath,
    name,
    overview,
    stack,
    features,
    scale,
}) => {
    const [path, setPath] = useState<string>(tnPath);

    const shadeOpacity = scale === 1.1 || scale === 1 ? 'opacity-0' : 'opacity-70 border-none';

    return (
        <div 
            className='flex flex-col w-full h-full' 
            onClick={() => onClick({
                title: name,
                children: 
                    <ProjectCard 
                        name={name}
                        gifPath={gifPath}
                        overview={overview}
                        stack={stack}
                        features={features}
                    />,
            })}
        >
            <div
                className={`border-white hover:border-orange-600 border-2 rounded-xl mr-12 cursor-pointer w-full h-96 sm:h-48 relative transition-transform duration-700 ease-in-out`}
                onMouseEnter={() => setPath(gifPath)}
                onMouseLeave={() => setPath(tnPath)}
                style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.7s ease-in-out',
                }}
            >
                <Image 
                    src={path} 
                    alt={name} 
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl w-full h-full'
                />

                <div className={`absolute inset-0 bg-black rounded-xl transition-opacity duration-300 ${shadeOpacity}`} />

                <div className='absolute inset-0 flex items-end pb-2 opacity-0 hover:opacity-100 transition-opacity duration-1000'>
                    <span className='bg-orange-600 rounded-r-lg py-2 px-4 text-white text-lg font-bold'>{name}</span>
                </div>
            </div>
        </div>
    );
}

export default Project;
