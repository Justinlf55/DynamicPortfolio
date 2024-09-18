import React, { useState } from 'react';
import Image from 'next/image';

import Button from './Button';

interface ProjectCardProps {
    name: string;
    gifPath: string;
    overview: string;
    stack: {
        [key: string]: string;
    };
    features: {
        [key: string]: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    gifPath,
    name,
    overview,
    stack,
    features,
}) => {
    const [tab, setTab] = useState<string>('Summary');
    const [fade, setFade] = useState<boolean>(true);

    const handleTabChange = (newTab: string) => {
        setFade(false);
        setTimeout(() => {
            setTab(newTab);
            setFade(true);
        }, 300);
    };

    const summarySection = (
        <p className='text-xl'>{overview}</p>
    );

    const stackSection = (
        <ul className='text-xl'>
            {Object.entries(stack).map(([category, description]) => (
                <li key={category} className='mb-4'>
                    <h3 className='text-2xl font-semibold'>{category}</h3>
                    <p>{description}</p>
                </li>
            ))}
        </ul>
    );

    const featuresSection = (
        <ul className='text-xl'>
            {Object.entries(features).map(([feature, details]) => (
                <li key={feature} className='mb-4'>
                    <h3 className='text-2xl font-semibold'>{feature}</h3>
                    <p>{details}</p>
                </li>
            ))}
        </ul>
    );

    type TabType = 'Summary' | 'Stack' | 'Features';

    const sections: Record<TabType, JSX.Element> = {
        'Summary': summarySection,
        'Stack': stackSection,
        'Features': featuresSection,
    };

    return (
        <div className='mt-2 h-full flex flex-col items-center justify-center max-w-screen-md mx-auto'>
            <div className='relative w-full h-96'>
                <Image
                    src={gifPath}
                    alt={name}
                    height={100}
                    width={1000}
                    objectFit='cover'
                    className='border-slate-400 border-[1px] shadow-lg rounded-xl'
                />
            </div>
            <div className='mt-4 mb-2 flex gap-4'>
                <Button
                    onClick={() => handleTabChange('Summary')} 
                    selected={tab === 'Summary'}
                    transparent
                    sm
                >
                    Summary
                </Button>
                <Button 
                    onClick={() => handleTabChange('Stack')} 
                    selected={tab === 'Stack'}
                    transparent
                    sm
                >
                    Stack
                </Button>
                <Button
                    onClick={() => handleTabChange('Features')} 
                    selected={tab === 'Features'}
                    transparent
                    sm
                >
                    Features
                </Button>
            </div>
            <div 
                className={`p-4 text-white mb-36 mt-8 w-full h-full overflow-y-auto transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className='text-4xl font-bold'>{tab}</h1>
                <div className='mt-6'>
                    {sections[tab as TabType]}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
