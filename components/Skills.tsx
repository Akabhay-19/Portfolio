import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionHeader from './SectionHeader';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const Skills: React.FC = () => {
  // Helper to get color for category
  const getCategoryColor = (index: number) => {
    const colors = ['#06b6d4', '#d946ef', '#22c55e', '#8b5cf6', '#fbbf24'];
    return colors[index % colors.length];
  };

  const getCategoryBorder = (index: number) => {
    const borders = [
      'border-cyber-primary',
      'border-cyber-secondary',
      'border-cyber-accent',
      'border-cyber-purple',
      'border-cyber-gold'
    ];
    return borders[index % borders.length];
  };

  const getCategoryText = (index: number) => {
    const texts = [
      'text-cyber-primary',
      'text-cyber-secondary',
      'text-cyber-accent',
      'text-cyber-purple',
      'text-cyber-gold'
    ];
    return texts[index % texts.length];
  };

  return (
    <section id="skills" className="py-24 bg-cyber-black/50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader title="System Specs" subtitle="TECHNICAL_COMPETENCIES" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chart Visualization */}
          <div className="bg-cyber-dark/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-2xl">
            
            {/* Ambient Chart Glow */}
            <div className="absolute inset-0 bg-cyber-primary/5 blur-2xl rounded-2xl"></div>

            <h3 className="absolute top-4 left-4 font-mono text-cyber-primary text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></span>
              ANALYSIS_MODE: PROFICIENCY
            </h3>
            
            <div className="h-[400px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILL_CATEGORIES}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis 
                    dataKey="name" 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Orbitron', fontWeight: 'bold' }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    fill="url(#radarGradient)"
                    fillOpacity={0.6}
                  />
                  <defs>
                    <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#d946ef" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', borderColor: '#06b6d4', color: '#fff', borderRadius: '8px' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend/Stats */}
            <div className="grid grid-cols-3 gap-4 w-full mt-4 border-t border-gray-800 pt-4">
              <div className="text-center group">
                <div className="text-2xl font-orbitron text-white group-hover:text-cyber-primary transition-colors">5+</div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest">LANGUAGES</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-orbitron text-white group-hover:text-cyber-secondary transition-colors">4+</div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest">DB SYSTEMS</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-orbitron text-white group-hover:text-cyber-accent transition-colors">10+</div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest">ML LIBS</div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Chips */}
          <div className="grid gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={category.name} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-3 w-3 rounded-sm rotate-45 ${getCategoryText(idx).replace('text-', 'bg-')}`}></div>
                  <h4 className={`font-orbitron text-lg font-bold ${getCategoryText(idx)}`}>{category.name}</h4>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-800 to-transparent"></div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className={`
                        bg-cyber-dark/80 backdrop-blur-sm border px-3 py-1.5 rounded-md text-sm text-gray-400 font-mono transition-all duration-300 cursor-default hover:text-white hover:shadow-lg
                        border-gray-800 hover:${getCategoryBorder(idx)}
                      `}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;