import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-700">{description}</p>
                {children && <div className="mt-2">{children}</div>}
            </div>
        </div>
    );
};

export default Card;