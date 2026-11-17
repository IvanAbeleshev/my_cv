import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', variant = 'primary' }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none transition duration-300';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;