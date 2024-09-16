import React from 'react';
import TimelineItem from './TimelineItem';
import { timelineData } from '../props';

interface TimelineProps {
    onClick: (modalProps: { title: string, children: React.ReactNode }) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onClick }) => (
    <div className='relative w-5/6 sm:w-full h-1/5 sm:h-full flex items-center justify-start mt-48 sm:mt-12'>
        <h1 className='font-bold text-white text-3xl leading-none sm:hidden'>Employment Timeline</h1>
        
        <div className='absolute w-full sm:w-2 sm:h-full h-2 bg-orange-700 left-0 sm:left-1/2 transform sm:-translate-x-1'></div>
        
        <div className='flex ml-24 space-x-96 sm:space-x-0 sm:space-y-40 relative z-10 justify-between sm:flex-col sm:items-center sm:justify-center'>
            {timelineData.map((data, index) => (
                <TimelineItem 
                    key={index} 
                    index={index} 
                    data={data} 
                    onClick={onClick} 
                />
            ))}
        </div>
    </div>
);

export default Timeline;
