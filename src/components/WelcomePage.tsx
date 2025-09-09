import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGame } from './GameContext';
import { Eye, Shield, Target, Zap } from 'lucide-react';
import cyberEye from '@/assets/cyber-eye.jpg';

const WelcomePage: React.FC = () => {
  const { startGame } = useGame();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-4xl w-full p-8 cyber-glow bg-card/50 backdrop-blur-sm border-border/50">
        <div className="text-center space-y-8">
          {/* Hero Image */}
          <div className="relative mx-auto w-48 h-36 rounded-lg overflow-hidden">
            <img 
              src={cyberEye} 
              alt="Cyber Security Eye" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold spooky-text glitch-effect">
              WE KNOW WHAT YOU DID
            </h1>
            <h2 className="text-3xl font-semibold text-accent">
              LAST SUMMER 👁️
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your digital footprints never disappear. Join our Security Awareness Program 
              and discover what we've been watching...
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="text-center space-y-2">
              <Eye className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Surveillance</h3>
              <p className="text-sm text-muted-foreground">We're always watching</p>
            </div>
            <div className="text-center space-y-2">
              <Shield className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-semibold text-foreground">Protection</h3>
              <p className="text-sm text-muted-foreground">Learn to stay safe</p>
            </div>
            <div className="text-center space-y-2">
              <Target className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Detection</h3>
              <p className="text-sm text-muted-foreground">Spot the threats</p>
            </div>
            <div className="text-center space-y-2">
              <Zap className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-semibold text-foreground">Response</h3>
              <p className="text-sm text-muted-foreground">React quickly</p>
            </div>
          </div>

          {/* Warning Message */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-destructive font-medium">
              ⚠️ Security Alert: Unauthorized activities detected in your digital environment.
              Complete the security assessment to maintain system access.
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button 
              onClick={startGame} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold cyber-glow"
            >
              Begin Security Assessment
            </Button>
            <p className="text-sm text-muted-foreground">
              Complete 4 security challenges to unlock your personalized training program
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WelcomePage;