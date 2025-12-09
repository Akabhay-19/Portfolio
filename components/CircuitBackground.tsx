import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-cyber-black">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.07]"></div>
      
      {/* Colorful Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyber-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-glow"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyber-secondary/20 blur-[100px] rounded-full mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-cyber-purple/20 blur-[80px] rounded-full mix-blend-screen animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      
      {/* Moving lines (Data streams) */}
      <div className="absolute inset-0">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-40 absolute top-[20%] animate-scan" style={{ animationDuration: '8s' }}></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-secondary to-transparent opacity-40 absolute top-[60%] animate-scan" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-cyber-accent to-transparent opacity-30 absolute left-[15%] animate-pulse"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-cyber-primary to-transparent opacity-30 absolute right-[15%] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default CircuitBackground;