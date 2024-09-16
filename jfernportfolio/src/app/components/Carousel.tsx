import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface CarouselProps {
  items: React.ReactNode[];
  index?: number;
  onClick?: (index: number) => void;
  nav: 'side' | 'bottom'; // Changed to 'bottom' | 'side' to be more explicit
  modal?: boolean; // New prop to specify if it's in a modal
}

const Carousel: React.FC<CarouselProps> = ({ items, index = 0, nav, onClick, modal }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const nextItem = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    onClick && onClick(newIndex);
  };

  const prevItem = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    onClick && onClick(newIndex);
  };

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
    onClick && onClick(idx);
  };

  const sideNav = (
    <div className={`w-full flex justify-between items-center z-50 p-4 ${modal ? 'absolute top-1/2' : ''}`}>
      <button
        className='text-3xl text-white hover:text-amber-600 duration-500 font-bold'
        onClick={prevItem}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className='text-3xl text-white hover:text-amber-600 duration-500 font-bold rounded-xl'
        onClick={nextItem}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );

  const bottomNav = (
    <div className={`fixed bottom-0 w-full flex justify-between items-center border-t-[0.5px] border-white bg-slate-950 z-50 p-4 ${modal ? 'bg-opacity-70' : ''}`}>
      <button
        className='text-3xl text-white hover:text-amber-600 duration-500 font-bold'
        onClick={prevItem}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        Back
      </button>
      <div className='flex space-x-2'>
        {items.map((_, idx) => (
          <span
            onClick={() => handleDotClick(idx)}
            key={idx}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-amber-600' : 'bg-white opacity-50'
            }`}
          />
        ))}
      </div>
      <button
        className='text-3xl text-white hover:text-amber-600 duration-500 font-bold rounded-xl'
        onClick={nextItem}
      >
        Next
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );

  return (
    <div className={`relative w-screen overflow-hidden ${modal ? 'h-full' : ''}`}>
      <div
        className='flex transition-transform duration-1000 ease-in-out'
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          width: `${items.length * 100}vw`,
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className='w-screen h-full flex-shrink-0'>
            {item}
          </div>
        ))}
      </div>
      {
        nav === 'bottom'
          ? bottomNav
          : sideNav
      }
    </div>
  );
};

export default Carousel;

