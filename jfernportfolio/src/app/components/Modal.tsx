import React from 'react';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    onClick: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ onClick, title, children }) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClick();
        }
    };

    return (
        <div 
            id='modal'
            className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 h-full'
            onClick={handleOverlayClick}
        >
            <div className='relative w-full max-w-3xl h-3/4 rounded-3xl p-6 bg-slate-800 bg-opacity-60 backdrop-blur-3xl glow-border overflow-auto' style={{ marginTop: '80px' }}>
                <div className="absolute top-4 right-4">
                    <FontAwesomeIcon
                        className='text-white text-4xl cursor-pointer transition-all hover:text-amber-600 duration-500 font-bold'
                        icon={faTimes}
                        onClick={onClick}
                    />
                </div>
                <div className='flex flex-col items-center mx-4 my-8 h-full'>
                    <Title first={title.split(' ')[0]} second={title.split(' ')[1]} fontSize='7xl' />
                    <div className='mt-8 flex-1 w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
