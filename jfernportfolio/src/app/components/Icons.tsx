import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Icons: React.FC =({}) => {
    const bgGradient = 'bg-gradient-to-r from-amber-600 via-orange-700 to-red-800 text-transparent'
    const iconHoverStyles = `{transform hover:-translate-y-2 hover:scale-110 transition duration-500 ease-in-out hover:${bgGradient}}`;
    const iconStyles = 'text-white text-2xl rounded-full p-4 mr-4 border-2 border-white items-center sm:text-xl';

    return (
        <div className='sm:items-center sm:justify-cetner sm:p-0 sm:pt-6 pl-24'>
            <a href='https://www.linkedin.com/in/justin-f-7a4727122/' target='_blank'>
                <FontAwesomeIcon className={`${iconStyles} ${iconHoverStyles}`} icon={faLinkedinIn} />
            </a>
            <a href='https://github.com/Justinlf55' target='_blank'>
                <FontAwesomeIcon className={`${iconStyles} ${iconHoverStyles}`} icon={faGithub} />
            </a>
            <a href='/'>
                <FontAwesomeIcon className={`${iconStyles} ${iconHoverStyles}`} icon={faLink} />
            </a>
        </div>
    )
}

export default Icons;
