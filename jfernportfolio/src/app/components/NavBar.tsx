'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import NavLinks from './NavLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
    onModalOpen?: () => void,
    page: string,
    onClick: (index: number) => void,
}

const NavBar: React.FC<NavBarProps> = ({onClick, page, onModalOpen}) => {
    const [isOpen, setIsOpen]  = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(!isOpen);
   
    return(
        <nav className='fixed top-0 z-50 bg-slate-950 flex items-center justify-between pl-6 pr-4  border-b-[0.5px] border-white md:block w-full sm:p-3 '>
            <div className='flex items-center justify-between w-full'>
                <div className='flex direction-row items-center justify-center'>
                    <Link className='text-white text-3xl font-bold flex transform hover:-translate-y-2 hover:scale-110 transition duration-500 ease-in-out' href="/">
                        Justin
                        <span className='bg-clip-text bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 text-transparent line-block'>Fernandez</span>
                    </Link>
                </div>

                <span className='text-3xl text-white cursor-pointer hidden md:flex' onClick={toggleMenu}>
                    {isOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                </span>

                {!isOpen && (
                    <div className='md:hidden items-center justify-end'>
                        <NavLinks onModalOpen={onModalOpen} page={page} onClick={onClick}/>
                    </div>
                )}
            </div>

            {isOpen && (
                <div className='w-full block'>
                    <NavLinks onModalOpen={onModalOpen} page={page} onClick={onClick}/>
                </div>
            )}
        </nav>
   )
};

export default NavBar;
