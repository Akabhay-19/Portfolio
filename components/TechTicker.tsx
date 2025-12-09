import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const TechTicker: React.FC = () => {
  // Flatten all skills from all categories
  const techSkills = SKILL_CATEGORIES.flatMap(cat => cat.skills);

  // Duplicate the list to ensure seamless scrolling
  const tickerItems = [...techSkills, ...techSkills, ...techSkills]; 

  // Colors to cycle through
  const colors = [
    "text-cyber-primary", // Cyan
    "text-cyber-secondary", // Fuchsia
    "text-cyber-accent", // Green
    "text-cyber-purple", // Violet
    "text-cyber-gold", // Amber
    "text-white", // White
  ];

  return (
    <div className="w-full bg-cyber-black/50 backdrop-blur-md border-y border-cyber-primary/20 overflow-hidden py-6 relative z-20">
      
      {/* Gradient Fade Masks */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-cyber-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-cyber-black to-transparent z-10"></div>

      <div className="flex w-max animate-scroll gap-16 px-8">
        {tickerItems.map((item, index) => {
          // Assign a color based on index
          const colorClass = colors[index % colors.length];
          
          return (
            <div 
              key={`${item}-${index}`} 
              className="flex items-center gap-3 group transition-transform hover:scale-110 duration-300"
            >
              <span className={`font-orbitron font-bold text-xl ${colorClass} drop-shadow-md whitespace-nowrap opacity-80 group-hover:opacity-100`}>
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechTicker;