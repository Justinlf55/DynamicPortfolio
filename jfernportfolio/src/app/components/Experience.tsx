import React from 'react';
import Title from './Title';
import Timeline from './Timeline';

interface ExperienceProps {
  onClick: (node: {
    title: string;
    children: React.ReactNode;
  }) => void;
}

const Experience: React.FC<ExperienceProps> = ({onClick}) => {
  return (
    <div id="Experience" className="h-screen sm:h-4/5 flex flex-col sm:justify-center sm:items-center">
      <Title first="My" second="Experience" fontSize="text-7xl" />
      <Timeline onClick={onClick}/>
    </div>
  );
};

export default Experience;
