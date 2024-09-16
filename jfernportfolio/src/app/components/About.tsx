import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

import Title from './Title';

const About: React.FC = () => {
    const description = `I graduated from the University of California, Irvine, with a degree in Biology in 2017. After several years of gaining valuable experience in the biotech and healthcare sectors, I made a career transition to software engineering in late 2019 through App Academy's immersive coding bootcamp. This journey sparked my passion for tackling complex technical challenges and creating impactful solutions.

    With over two years of professional experience as a full-stack engineer, I’ve specialized in frontend development, especially using React. I thrive in environments where I can turn creative ideas into functional, user-centric designs, and I’m deeply driven by the opportunity to enhance digital experiences. My goal is to combine technical expertise and a user-first mindset to help organizations deliver top-tier products and services.`;
    const wordGradient = 'bg-clip-text bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 text-transparent';
    const educationCardStyles = 'border-2 rounded-3xl py-10 px-12 flex mx-6 place-items-start w-1/2 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center';
   
    const subtitle =  (
        <Typewriter 
            options={{
                strings: ['Frontend Enthusiast', 'Biology Graduate Turned Software Engineer', 'React Developer', '2+ Years Professional Experience', 'Biology Graduate turned Software Engineer'], 
                autoStart: true, 
                loop: true,
            }}
        />
    )

    return (
        <div id='About' className={`flex flex-col justify-center sm:px-8 sm:justify-start sm:mt-12`}>
            <Title first='About' second='Me' fontSize='7xl'/>
            <h2 className='text-4xl font-bold flex sm:text-xl'>
                <span className={wordGradient}>
                    {subtitle}
                </span>
            </h2>
            <p className='leading-relaxed text-white text-2xl mt-6 sm:text-xl'>
                {description}
            </p>
            <div className='flex w-full justify-between mt-12 sm:flex-col sm:justify-center sm:items-center sm:hidden'>
                <div className={`${educationCardStyles}`}>
                    <Image src='/uci.png' width={140} height={120} alt='UCI'/>
                    <div className='ml-6'>
                        <h3 className='text-white text-2xl font-bold sm:text-xl'>University of California, Irvine</h3>
                        <h4 className='text-white text-xl font-bold sm:text-lg'>Irvine, California</h4>
                        <h5 className='text-white text-lg font-bold mt-4 sm:text-mg'>Bachelor of Science, Biology</h5>
                        <h6 className='text-white text-lg italic sm:text-md'>September 2013 - June 2017</h6>
                    </div>
                </div>
                <div className={`${educationCardStyles}`}>
                    <Image src='/aA.png' width={140} height={120} alt='App Academy'/>
                    <div className='ml-6'>
                        <h3 className='text-white text-2xl font-bold sm:text-xl'>App Academy</h3>
                        <h4 className='text-white text-xl font-bold sm:text-lg'>San Francisco, California</h4>
                        <h5 className='text-white text-lg text-wrap font-bold mt-4 sm:text-md'>Immersive software development course focused on full stack web development</h5>
                        <h6 className='text-white text-lg italic sm:text-md'>October 2019 - March 2020</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-white font-bold rounded-full glow-border p-48 -z-50 -left-10 -bottom-28 absolute sm:hidden'></div>
            </div>
        </div>
    )
}

export default About;
