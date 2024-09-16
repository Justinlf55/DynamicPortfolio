import React from 'react';

interface SectionProps {
  title: string | null;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className='w-full sm:h-screen flex-shrink-0 pt-8 px-36 sm:px-4 my-24 flex flex-col'>
      {title && (
        <h2 className='text-3xl font-bold mb-2 sticky top-0 z-10px-4'>
          {title}
        </h2>
      )}
      <div className='flex-1 overflow-y-auto text-lg items-center justify-center'>
        {content}
      </div>
    </div>
  );
};

export default Section;
