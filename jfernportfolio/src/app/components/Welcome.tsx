'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

import Title from './Title';
import Icons from './Icons';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Welcome: React.FC = () => {

    const wordGradient = 'bg-clip-text bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 text-transparent';

    const typer = (
        <Typewriter 
            options={{
                strings: ['Software Engineer', 'Frontend Engineer', 'Web Developer', 'UI/UX Engineer'], 
                autoStart: true, 
                loop: true,
            }}
        />
    );

    const summary = `I'm a dedicated software engineer with a strong focus on building robust back-end systems and intuitive front-end experiences that drive seamless user interactions and optimize business performance.`;

    return (
        <div id='Home' className='flex items-center z-50 bg-opacity-0 mx-24 sm:mx-0 mt-12 sm:flex-col-reverse sm:justify-center sm:items-center'>
            <div className='w-full sm:text-center'>
                <h1 className='text-white text-7xl font-bold py-4 sm:hidden'>Welcome,</h1>
                <div className='sm:flex sm:justify-center sm:w-full sm:mt-4'>
                    <Title first="I'm" second='Justin' fontSize='text-6xl sm:text-5xl' />
                </div>
                <h3 className='mb-6 text-white text-4xl font-bold flex sm:text-xl sm:justify-center sm:mb-4'>
                    An experienced&nbsp;
                    <span className={wordGradient}>
                        {typer}
                    </span>
                </h3>
                <div className='py-8 flex items-center w-full sm:flex-col md:flex-col sm:py-4'>
                    <Button liftHover lg>                        
                        <a href='/Justin_Fernandez_Resume_2024.pdf' download='Justin_Fernandez_Resume.pdf'>
                            Resume&nbsp;
                            <FontAwesomeIcon className='text-2xl ml-4p' icon={faDownload} />
                        </a>
                    </Button>
                    <Icons />
                </div>
                <h4 id='Summary' className='leading-relaxed mt-2 font-bold text-white text-3xl relative z-50 sm:text-2xl sm:mt-4'>
                    {summary}
                </h4>
            </div>
            <div className='sm:flex sm:flex-col md:flex-col sm:items-center md:items-center sm:justify-center md:justify-center'>
                <div className='relative w-96 h-96 sm:w-36 sm:h-36 rounded-full overflow-hidden glow-border z-50'>
                    <img 
                        src='/headphoto.png' 
                        alt='self-image'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='text-white font-bold rounded-full glow-border w-64 h-64 top-48 absolute sm:hidden'></div>
                <div className='text-white font-bold rounded-full glow-border w-36 h-36 top-49 absolute sm:hidden'></div>
                <div className='text-white font-bold rounded-full glow-border w-24 h-24 bottom-60 right-20 absolute sm:hidden'></div>
                <div className='text-white font-bold rounded-full glow-border w-24 h-24 left-[-36px] absolute sm:hidden'></div>
            </div>
        </div>
    );
};

export default Welcome;
