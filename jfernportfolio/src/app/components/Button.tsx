import React from 'react';

interface ButtonProps {
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    outline?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    liftHover?: boolean;
    standardHover?: boolean;
    customStyle?: string;
    transparent?: boolean;
    selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    children,
    liftHover = false,
    standardHover = false,
    sm = false,
    md = false,
    lg = false,
    outline = false,
    customStyle = '',
    transparent = false,
    selected = false,
    onClick
}) => {
    const background = transparent 
        ? 'bg:transparent text-white border-white border-2 hover:border-orange-600 duration-500' 
        : 'bg-gradient-to-r from-amber-600 via-orange-700 to-red-800';
    const buttonStyles = 'text-white text-xl font-bold rounded-2xl';
    const buttonHoverStyles = 'transform transition duration-500 ease-in-out';
    const small = sm ? 'py-2 px-6' : '';
    const med = md ? 'py-4 px-10' : '';
    const large = lg ? 'py-4 px-12' : '';
    const lift = liftHover ? 'hover:-translate-y-2 hover:scale-110' : '';
    const standard = standardHover ? 'hover:bg-cyan-600' : '';
    const border = outline ? 'border-2 border-white' : '';
    const selectedStyle = selected ? 'bg-orange-600 border-none' : '';

    return (
        <button 
            onClick={onClick} 
            className={`${buttonHoverStyles} ${background} ${buttonStyles} ${small} ${med} ${large} ${lift} ${standard} ${border} ${selectedStyle} ${customStyle}`}
        >
            {label || children}
        </button>
    );
}

export default Button;
