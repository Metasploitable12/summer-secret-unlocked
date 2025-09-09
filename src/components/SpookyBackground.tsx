import React from 'react';

const SpookyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated surveillance grid */}
      <div className="surveillance-grid absolute inset-0 opacity-30" />
      
      {/* Floating cyber elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-animation" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full pulse-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/60 rounded-full pulse-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full pulse-animation" style={{ animationDelay: '0.5s' }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-glow rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-glow rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Scanning lines */}
      <div className="absolute inset-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" 
             style={{ 
               top: '20%', 
               animationDuration: '3s',
               transform: 'translateY(-50%)' 
             }} />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse" 
             style={{ 
               top: '70%', 
               animationDuration: '4s',
               animationDelay: '1s',
               transform: 'translateY(-50%)' 
             }} />
      </div>
    </div>
  );
};

export default SpookyBackground;