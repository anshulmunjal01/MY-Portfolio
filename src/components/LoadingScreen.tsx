import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [loadingText, setLoadingText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  
  const loadingSteps = [
    'Initializing portfolio...',
    'Loading components...',
    'Connecting to server...',
    'Compiling assets...',
    'Ready to launch!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep]);
        setCurrentStep(prev => prev + 1);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        
        <div className="font-mono text-green-400 text-xl mb-4">
          <span className="animate-pulse">{loadingText}</span>
          <span className="animate-blink">_</span>
        </div>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / loadingSteps.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="mt-4 text-gray-400 text-sm font-mono">
          {Math.round((currentStep / loadingSteps.length) * 100)}% Complete
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;