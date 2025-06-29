import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: Section) => {
    if (section === currentSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(section);
      setIsTransitioning(false);
    }, 500);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero onNavigate={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleSectionChange} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <ParticleBackground />
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <PageTransition isActive={isTransitioning}>
        <main className="relative z-10">
          {renderCurrentSection()}
        </main>
      </PageTransition>
    </div>
  );
}

export default App;