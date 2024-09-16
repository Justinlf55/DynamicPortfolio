import React, { useState } from 'react';
import Button from './Button';

interface TimelineItemProps {
    index: number;
    data: {
        date: string;
        title: string;
        jobDescription: {
            summary: string;
            description: string[];
        };
        companyDescription: string;
        role: string;
        location: string;
    };
    onClick: (modalProps: { title: string, children: React.ReactNode }) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ index, data, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isAbove = index % 2 === 0;

    const hoverStyle ='hover:bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 rounded-3xl border-white border-2';

    const activeStyle = 'active:bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 rounded-3xl border-white border-2'

    const jobCard = (
        <div className='text-white font-bold flex flex-col items-center justify-center w-full z-50'>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='text-2xl sm:text-xl'>{data.location}</h2>
                <h2 className='text-xl sm:text-lg'>&nbsp;{data.date}</h2>
            </div>
            <h3 className='italic'>{data.companyDescription}</h3>
            <div className='mt-6 flex flex-col items-start w-full'>
                <h2>{data.role}</h2>
            </div>
            <div>
                <h3 className='pb-2'>{data.jobDescription.summary}</h3>
                <ul className='pl-4'>
                    {
                        data.jobDescription.description.map(point => (
                            <li className='m-2'>
                                <span className="mr-2">&#8226;</span>
                                {point}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );

    return (
        <div className='relative flex items-center justify-center'>
            <div 
                className='w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center z-50 cursor-pointer sm:hover:none'
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div 
                    className={`absolute ${isAbove ? '-top-24' : '-bottom-24'} left-1/2 transform -translate-x-1/2 text-white flex items-center justify-center flex-col transition-all duration-500 ease-in-out ${isOpen ? 'w-96 p-4' : 'w-96 border-none'} ${hoverStyle} ${activeStyle}`}
                >
                    <h1 className='text-3xl sm:text-2xl font-bold'>{data.title}</h1>
                    <h2>{data.role}</h2>
                    {isOpen && <h2>{data.location}</h2>}
                    <h3>{data.date}</h3>

                    {isOpen && (
                        <div className='mt-4 flex flex-col justify-center'>
                            <h4 className='mb-4'>{data.companyDescription}</h4>
                            <Button 
                                label='Read More' 
                                onClick={() => onClick({
                                    title: data.title,
                                    children: jobCard,
                                })} 
                                sm 
                                outline
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
