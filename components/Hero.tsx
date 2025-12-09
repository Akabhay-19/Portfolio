import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, Cpu, Code2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">

      {/* Background flare behind hero specifically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyber-primary/10 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-accent/50 bg-cyber-accent/10 rounded-full text-cyber-accent font-mono text-sm mb-2 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></span>
            SYSTEM_READY
          </div>

          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-cyber-purple to-cyber-secondary filter drop-shadow-[0_0_5px_rgba(139,92,246,0.3)]">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <div className="absolute -top-10 -left-10 text-[10rem] font-black text-white/5 select-none -z-10 font-orbitron">
              DEV
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-tech text-gray-200 flex items-center gap-3">
            <span className="text-cyber-secondary text-glow">&lt;</span>
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent font-bold">
              {PERSONAL_INFO.title}
            </span>
            <span className="text-cyber-secondary text-glow">/&gt;</span>
          </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed font-mono text-sm border-l-2 border-gradient-to-b from-cyber-primary to-cyber-purple pl-4 border-l-cyber-primary">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#experience"
              className="group relative px-8 py-3 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary font-orbitron text-sm hover:bg-cyber-primary hover:text-black transition-all duration-300 clip-path-slant overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-white to-cyber-primary opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              INITIALIZE_SEQUENCE
            </a>

            <a
              href="/resume.pdf"
              download="Abhay_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-mono text-sm hover:border-cyber-secondary hover:text-cyber-secondary hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all rounded-sm"
            >
              <Download size={16} />
              DOWNLOAD_RESUME
            </a>
          </div>
        </div>

        {/* Visual Graphic - Abstract Digital Core */}
        <div className="relative flex justify-center items-center perspective-1000">
          <div className="relative w-80 h-80 md:w-96 md:h-96">

            {/* Spinning Gradient Rings */}
            <div className="absolute inset-0 rounded-full border border-transparent border-t-cyber-primary border-l-cyber-purple animate-[spin_8s_linear_infinite] shadow-[0_0_30px_rgba(6,182,212,0.2)]"></div>
            <div className="absolute inset-4 rounded-full border border-transparent border-b-cyber-secondary border-r-cyber-accent animate-[spin_12s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 rounded-full border-2 border-dashed border-gray-700/50 animate-[spin_20s_linear_infinite]"></div>

            {/* Holographic Projection Lines */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-primary/5 via-transparent to-transparent animate-pulse rounded-full"></div>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-cyber-black/80 backdrop-blur-xl rounded-xl border border-cyber-primary/50 shadow-[0_0_60px_rgba(6,182,212,0.4)] flex items-center justify-center animate-float z-10 group overflow-hidden">

              {/* Internal Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-cyber-secondary/10 to-cyber-purple/10"></div>

              {/* Core Symbol */}
              <div className="relative z-20 flex flex-col items-center gap-2">
                <div className="relative">
                  <Cpu className="text-white w-16 h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  <Sparkles className="absolute -top-2 -right-2 text-cyber-accent w-6 h-6 animate-pulse" />
                </div>
                <div className="mt-2 text-[10px] font-mono text-cyber-primary tracking-[0.2em] animate-pulse">AI_CORE</div>
              </div>

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-primary shadow-[0_0_10px_#06b6d4]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-secondary shadow-[0_0_10px_#d946ef]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-accent shadow-[0_0_10px_#22c55e]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-purple shadow-[0_0_10px_#8b5cf6]"></div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyber-primary rounded-full shadow-[0_0_15px_#06b6d4]"></div>
            </div>
            <div className="absolute inset-8 animate-[spin_9s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyber-secondary rounded-full shadow-[0_0_15px_#d946ef]"></div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 -right-8 bg-black/60 backdrop-blur-md border border-cyber-primary/50 px-4 py-1.5 rounded-full text-[10px] font-mono text-cyber-primary shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-float" style={{ animationDelay: '1s' }}>
              VIBE_CODING
            </div>
            <div className="absolute bottom-12 -left-12 bg-black/60 backdrop-blur-md border border-cyber-secondary/50 px-4 py-1.5 rounded-full text-[10px] font-mono text-cyber-secondary shadow-[0_0_20px_rgba(217,70,239,0.3)] animate-float" style={{ animationDelay: '2s' }}>
              AGENTS_ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;