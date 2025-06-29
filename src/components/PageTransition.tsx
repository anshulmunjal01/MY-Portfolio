import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isActive: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, isActive }) => {
  return (
    <div className="relative">
      {isActive && (
        <div className="fixed inset-0 z-40 bg-black">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="font-mono text-green-400 text-lg">
                Navigating<span className="animate-pulse">...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className={`transition-all duration-500 ${isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;