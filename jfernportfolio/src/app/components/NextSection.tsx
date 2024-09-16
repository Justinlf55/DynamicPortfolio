import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface NextSectionProps {
    onClick?: () => void,
    page: string,
}

const NextSection: React.FC<NextSectionProps> = ({onClick, page}) => (
    <div className='text-white text-5xl p-2 font-bold transition-all hover:text-amber-600 duration-500'>
        <a href={`#${page}`}>
            <FontAwesomeIcon onClick={onClick} icon={faArrowDown} />
        </a>
    </div>
)

export default NextSection;
