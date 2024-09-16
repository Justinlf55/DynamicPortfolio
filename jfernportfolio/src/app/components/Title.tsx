import React from 'react';

interface TitleProps {
    first: string,
    second: string | React.ReactNode,
    fontSize: string,
}

const Title: React.FC<TitleProps> = ({first, second, fontSize}) => {
    const titleStyle = 'text-white text-6xl font-bold flex pb-2 sm:text-4xl sm:justify-start sm:items-center'
    const wordGradient = 'bg-clip-text bg-gradient-to-r from-orange-600 via-orange-700 to-red-800 text-transparent glow'
    return (
        <div className={`${titleStyle} ${fontSize}`}>
            {first}&nbsp;
            <span className={`${wordGradient}`}>{second}</span>
        </div>
    )
}

export default Title;
