import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const NavBar: React.FC = () => {
  const [active, setActive] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-cyber-primary/30 py-2' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-orbitron font-bold text-xl tracking-wider text-cyber-primary flex items-center gap-2">
          <span className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse"></span>
          AK_SYSTEMS
        </div>
        
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`flex items-center gap-2 font-mono text-sm tracking-wider hover:text-cyber-primary transition-colors ${active === link.href ? 'text-cyber-primary border-b border-cyber-primary' : 'text-gray-400'}`}
              >
                <Icon size={14} />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;