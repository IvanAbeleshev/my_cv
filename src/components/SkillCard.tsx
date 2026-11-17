'use client';
import React, { useEffect, useRef } from 'react';

interface SkillCardProps {
    skillName: string;
    skillLevel: number; // A value between 0 and 100
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, skillLevel }) => {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animation effect for skill bars
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && progressRef.current) {
                    progressRef.current.style.width = `${skillLevel}%`;
                }
            });
        }, { threshold: 0.1 });

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, [skillLevel]);

    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skillName}</span>
                <span className="text-neon-red font-medium">{skillLevel}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                    ref={progressRef}
                    className="skill-progress h-full bg-neon-red rounded-full"
                    style={{ width: '0%', boxShadow: '0 0 10px #ff003c' }}
                ></div>
            </div>
        </div>
    );
};

export default SkillCard;