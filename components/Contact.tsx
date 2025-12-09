import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-gradient-to-t from-cyber-black via-cyber-black to-transparent border-t border-gray-900 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-orbitron font-bold text-white mb-2">ESTABLISH_UPLINK</h2>
        <p className="font-mono text-gray-500 mb-12">Ready to process new data streams and challenges.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="group p-6 bg-cyber-dark border border-gray-800 hover:border-cyber-primary hover:bg-cyber-primary/5 transition-all flex flex-col items-center">
            <Mail className="mb-4 text-cyber-secondary group-hover:text-cyber-primary transition-colors" size={32} />
            <span className="text-gray-300 font-mono text-sm">{PERSONAL_INFO.email}</span>
            <span className="text-xs text-gray-600 mt-2">SECURE_MAIL_CHANNEL</span>
          </a>

          <a href={`tel:${PERSONAL_INFO.phone}`} className="group p-6 bg-cyber-dark border border-gray-800 hover:border-cyber-primary hover:bg-cyber-primary/5 transition-all flex flex-col items-center">
            <Phone className="mb-4 text-cyber-secondary group-hover:text-cyber-primary transition-colors" size={32} />
            <span className="text-gray-300 font-mono text-sm">{PERSONAL_INFO.phone}</span>
            <span className="text-xs text-gray-600 mt-2">VOICE_CHANNEL</span>
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-primary transition-colors">
            <Github size={24} />
          </a>
        </div>

        <div className="text-xs text-gray-700 font-mono">
          <p>© {new Date().getFullYear()} ABHAY KUMAR // SYSTEM ONLINE</p>
          <p className="mt-2">BUILT_WITH_REACT_TAILWIND</p>
        </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary"></div>
    </footer>
  );
};

export default Contact;