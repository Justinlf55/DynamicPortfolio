import React, { useState, useEffect } from 'react';

import Title from './Title';
import Skill from './Skill';
import Button from './Button';
import { skillsData } from '../props.js';

const Skills: React.FC = () => {
    const [category, setCategory] = useState<string>('All');
    const [filteredData, setFilteredData] = useState(skillsData);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setFilteredData(skillsData.filter(data => category === 'All' || data.category.includes(category)));
            setIsTransitioning(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [category]);

    const customBtnStyle = 'w-48 sm:text-md sm:mb-4 sm:w-1/2';

    return (
        <div className='flex flex-col sm:px-2 sm:justify-center sm:items-center'>
            <Title first='My' second='Skills' fontSize="text-7xl" />
            <div className='border-white border-2 rounded-3xl px-12 mt-8 sm:w-screen sm:mt-2 sm:border-none sm:px-4 sm:h-auto'>
                <div className='border-b-2 border-white flex flex-row justify-between py-6 sm:px-2 w-full sm:mt-0 sm:flex-wrap sm:justify-center'>
                    <Button outline transparent selected={category === 'All'} sm onClick={() => setCategory('All')} label='All' customStyle={customBtnStyle}/>
                    <Button outline transparent sm selected={category === 'Languages'} onClick={() => setCategory('Languages')} label='Languages' customStyle={customBtnStyle}/>
                    <Button outline transparent sm selected={category === 'Frontend'} onClick={() => setCategory('Frontend')} label='Frontend' customStyle={customBtnStyle}/>
                    <Button outline transparent sm selected={category === 'Backend'} onClick={() => setCategory('Backend')} label='Backend' customStyle={customBtnStyle}/>
                    <Button outline transparent sm selected={category === 'Frameworks'} onClick={() => setCategory('Frameworks')} label='Frameworks' customStyle={customBtnStyle}/>
                    <Button outline transparent sm selected={category === 'Miscellaneous'} onClick={() => setCategory('Miscellaneous')} label='Miscellaneous' customStyle={customBtnStyle}/>
                </div>
                <div className={`my-6 flex flex-row flex-wrap gap-8 sm:gap-6 transition-opacity duration-300 sm:justify-center sm:items-center ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {filteredData.map((data, index) => 
                        <div key={index} className='transition-transform duration-500 transform hover:scale-110 sm:hover:scale-105'>
                            <Skill label={data.label} path={data.path}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;

