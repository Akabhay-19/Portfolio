import React from 'react';
import { PROJECTS, LEADERSHIP } from '../constants';
import SectionHeader from './SectionHeader';
import { Cpu, Users, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Modules" subtitle="PROJECTS_AND_LEADERSHIP" />

        {/* Main Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative bg-cyber-dark/40 border border-gray-800 hover:border-transparent transition-all duration-300 rounded-lg">

              {/* Gradient Border on Hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyber-primary via-cyber-purple to-cyber-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] -z-10"></div>

              <div className="p-8 h-full bg-cyber-black/90 rounded-lg relative overflow-hidden">
                {/* Glowing Corner */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyber-primary/20 blur-xl rounded-full group-hover:bg-cyber-primary/30 transition-all"></div>

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-primary group-hover:to-cyber-purple transition-all">
                      {project.title}
                    </h3>
                    <p className="text-cyber-secondary font-mono text-sm mt-1">{project.subtitle}</p>
                  </div>
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-cyber-primary/20 transition-colors">
                    <Cpu className="text-gray-400 group-hover:text-cyber-primary transition-colors" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 bg-gray-900 border border-gray-700 rounded text-gray-400 group-hover:border-cyber-primary/50 group-hover:text-cyber-primary transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.points.map((p, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-cyber-purple transition-colors">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="relative">
          {/* Section Divider */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          <div className="pt-12">
            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
              <div className="p-3 bg-cyber-secondary/10 rounded-full border border-cyber-secondary/30 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                <Users className="text-cyber-secondary" />
              </div>
              <h3 className="text-3xl font-orbitron text-white">LEADERSHIP_LOGS</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {LEADERSHIP.map((role, index) => (
                <div key={index} className="glass-card p-6 rounded-lg border border-gray-800 hover:border-cyber-accent/50 transition-colors hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-white group-hover:text-cyber-accent transition-colors">{role.role}</h4>
                    <span className="text-xs font-mono text-gray-500 bg-black/50 px-2 py-1 rounded">{role.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-mono mb-4 border-b border-gray-800 pb-2">{role.organization}</p>
                  <ul className="space-y-1">
                    {role.description.map((d, i) => (
                      <li key={i} className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors flex gap-2">
                        <span className="text-cyber-accent">&gt;&gt;</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;