import React from 'react';
import { EXPERIENCE } from '../constants';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyber-secondary/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-primary/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader title="Data Logs" subtitle="CAREER_HISTORY_AND_INTERNSHIPS" />

        <div className="relative space-y-8 md:space-y-0">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyber-primary to-transparent opacity-50"></div>

          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center mb-16`}>
                
                {/* Connector Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-cyber-black border-2 border-cyber-primary rounded-full z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_#06b6d4]">
                  <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-1/2"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 p-4 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative glass-card p-1 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1">
                    
                    {/* Gradient Border via Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/50 via-cyber-purple/50 to-cyber-secondary/50 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Inner Card */}
                    <div className="relative bg-cyber-black/90 rounded-lg p-6 h-full">
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 p-3">
                         <div className="w-2 h-2 bg-gradient-to-tr from-cyber-primary to-cyber-secondary rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-cyber-primary group-hover:to-cyber-secondary transition-all">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-cyber-primary font-mono text-sm mt-1">
                            <Briefcase size={14} />
                            <span className="text-gray-300">{exp.company}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-cyber-secondary bg-cyber-secondary/10 px-3 py-1 border border-cyber-secondary/30 rounded-full">
                          {exp.type.toUpperCase()}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-5">
                        {exp.description.map((point, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed group/item">
                            <ChevronRight size={14} className="mt-1 text-cyber-primary/50 group-hover/item:text-cyber-accent transition-colors flex-shrink-0" />
                            <span className="group-hover/item:text-gray-300 transition-colors">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-xs font-mono text-gray-500 border-t border-gray-800 pt-3">
                        <Calendar size={12} className="text-cyber-purple" />
                        <span className="text-gray-400">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;