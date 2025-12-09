import React from 'react';

interface Props {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 relative">
      <div className="flex items-end gap-4 mb-2">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
          {title}
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-cyber-primary/50 to-transparent mb-2"></div>
      </div>
      <p className="font-mono text-cyber-primary text-sm tracking-widest pl-1">
        // {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;