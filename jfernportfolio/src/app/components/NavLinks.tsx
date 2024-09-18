import React from 'react';

import NavLink from './NavLink';
import Button from './Button';


interface NavLinksProps {
  onClick: (index: number) => void;
  page: string;
  onModalOpen?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({onClick, page, onModalOpen}) => {

  return (
    <ul id="navlinks" className='flex items-center md:block static z-10 md:absolute md:my-2 md:w-full left-0 md:shadow md:bg-slate-900'>
      <li className='mx-4 my-6 md:my-4'>
        <NavLink index={0} selected={page} onClick={onClick} name='Home'/>
      </li>
      <li className='mx-4 my-6 md:my-4'>
        <NavLink index={1} selected={page} onClick={onClick} name='About'/>
      </li>
      <li className='mx-4 my-6 md:my-4'>
        <NavLink index={2} selected={page} onClick={onClick} name='Skills'/>
      </li>
      <li className='mx-4 my-6 md:my-4'>
        <NavLink index={3} selected={page} onClick={onClick} name='Experience'/>
      </li>
      <li className='mx-4 my-6 md:my-4'>
        <NavLink index={4} selected={page} onClick={onClick} name='Projects'/>
      </li>
      <li className='mx-4 my-6 md:my-4'>
        <Button liftHover sm onClick={onModalOpen}>Contact Me</Button>
      </li>
    </ul>
  );
}

export default NavLinks;
