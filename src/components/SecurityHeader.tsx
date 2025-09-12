import React from 'react';

const SecurityHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-primary/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/syncron-security-logo.jpg" 
            alt="Syncron Security Awareness Month 2025" 
            className="h-16 w-auto object-contain"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary">
              Syncron Security Awareness Month 2025
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Building a Secure Future Together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityHeader;