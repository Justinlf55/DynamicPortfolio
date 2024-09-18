import React from 'react';

interface NavLinkProps {
  name: string;
  selected: string;
  onClick: (index: number) => void;
  index: number;
}

const NavLink: React.FC<NavLinkProps> = ({ name, index, selected, onClick }) => {
  const selectedStyle = 'block max-w-0 max-w-full transition-all duration-700 h-1 bg-gradient-to-r from-amber-600 via-orange-700 to-red-800';

  const isSelected = name === selected;

  return (
    <div onClick={() => onClick(index)} className='hover:cursor-pointer text-xl text-white font-bold group transition hover:bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 hover:bg-clip-text duration-700 underline-offset-8'>
      {name}
      <span className={`${isSelected ? selectedStyle : ''} block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 mt-1`}></span>
    </div>
  );
}

export default NavLink;
