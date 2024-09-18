import React, { useState } from 'react';
import Image from 'next/image';

interface SkillProps {
  path: string;
  label: string;
}

const Skill: React.FC<SkillProps> = ({ label, path }) => {
  const [showLabel, setShowLabel] = useState<boolean>(false);

  const hoverStyle =
    'hover:transform transition duration-500 ease-in-out hover:-translate-y-2 hover:scale-110 hover:z-50';

  return (
    <div
      className={`${hoverStyle} m-2 p-4 rounded-3xl border-white border-2 flex flex-col items-center justify-center w-[140px] h-[140px] sm:w-[95px] sm:h-[95px]`}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      data-tooltip={label}
    >
      <div className="relative w-full h-full">
        <Image
          src={path}
          alt={label}
          layout='fill'
          objectFit='contain'
          className={`${showLabel ? 'scale-75' : ''} transition-transform duration-500 ease-in-out`}
        />
      </div>
      {showLabel && <h4 className='text-white text-sm font-bold mb-2'>{label}</h4>}
    </div>
  );
};

export default Skill;
