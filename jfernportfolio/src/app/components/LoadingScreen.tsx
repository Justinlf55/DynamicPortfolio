import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-950">
      <div className="loader">
        <h1 className='text-white text-7xl sm:text-4xl font-bold mr-3'>
            <span className='bg-clip-text bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 text-transparent line-block'>
                Loading
            </span>
        </h1>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
