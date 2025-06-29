import React from 'react';
import { Terminal, User, Code, Briefcase, Mail } from 'lucide-react';

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'hero' as Section, label: 'Home', icon: Terminal },
    { id: 'about' as Section, label: 'About', icon: User },
    { id: 'skills' as Section, label: 'Skills', icon: Code },
    { id: 'projects' as Section, label: 'Projects', icon: Briefcase },
    { id: 'contact' as Section, label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="font-mono text-green-400 font-semibold">
              AnshulMunjal@portfolio:~$
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 flex items-center space-x-2 ${
                  currentSection === id
                    ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                    : 'text-gray-300 hover:text-green-400 hover:bg-green-400/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-green-400 transition-colors">
              <Terminal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;