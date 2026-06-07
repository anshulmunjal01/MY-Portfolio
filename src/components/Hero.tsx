import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const texts = [
    'Web/Salesforce Developer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Innovator'
  ];
  
  const currentText = texts[Math.floor(currentIndex / 100) % texts.length];

  useEffect(() => {
    const timer = setInterval(() => {
      const textIndex = Math.floor(currentIndex / 100) % texts.length;
      const charIndex = currentIndex % 100;
      const targetText = texts[textIndex];
      
      if (charIndex < targetText.length) {
        setDisplayText(targetText.slice(0, charIndex + 1));
      } else if (charIndex < targetText.length + 20) {
        setDisplayText(targetText);
      } else if (charIndex < targetText.length + 30) {
        setDisplayText(targetText.slice(0, targetText.length - (charIndex - targetText.length - 20)));
      } else {
        setCurrentIndex(0);
        return;
      }
      
      setCurrentIndex(prev => prev + 1);
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, texts]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block p-1 border border-green-400/30 rounded-lg bg-green-400/10 mb-6">
            <span className="font-mono text-green-400 text-sm px-3 py-1">
              console.log("Welcome to my portfolio");
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Anshul
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-mono min-h-[40px]">
            <span>{displayText}</span>
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Software Developer specializing in web development and Salesforce administration, with a focus on building scalable applications, optimizing business processes, and delivering high-quality technology solutions.

          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          
          <a
            href="https://drive.google.com/file/d/1nZyUM53f-yKdSQoLOxmQQ7zwRRMF5wMw/view?usp=drive_link"
            download
            className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/anshulmunjal01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/anshulmunjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </button>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="animate-bounce text-green-400 hover:text-green-300 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
