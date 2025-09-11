import React from 'react';

const ProfessionalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Professional grid pattern */}
      <div className="professional-grid absolute inset-0 opacity-20" />
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full pulse-animation" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full pulse-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/20 rounded-full pulse-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full pulse-animation" style={{ animationDelay: '0.5s' }} />
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-glow rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-glow rounded-full opacity-8 animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Professional accent lines */}
      <div className="absolute inset-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" 
             style={{ 
               top: '20%', 
               animationDuration: '4s',
               transform: 'translateY(-50%)' 
             }} />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-pulse" 
             style={{ 
               top: '70%', 
               animationDuration: '5s',
               animationDelay: '1s',
               transform: 'translateY(-50%)' 
             }} />
      </div>
    </div>
  );
};

export default ProfessionalBackground;