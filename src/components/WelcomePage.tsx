import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGame } from './GameContext';
import { Shield, Target, Zap, Lock, Users, Award, BookOpen } from 'lucide-react';
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
            <h1 className="text-4xl font-bold spooky-text">
              SECURITY AWARENESS CHALLENGE
            </h1>
            <h2 className="text-2xl font-semibold text-accent">
              Test Your Cybersecurity Knowledge 🛡️
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to our interactive cybersecurity training program. Test your knowledge, 
              learn best practices, and become a security champion.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="text-center space-y-2">
              <Shield className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Protection</h3>
              <p className="text-sm text-muted-foreground">Learn security fundamentals</p>
            </div>
            <div className="text-center space-y-2">
              <Target className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-semibold text-foreground">Detection</h3>
              <p className="text-sm text-muted-foreground">Identify security threats</p>
            </div>
            <div className="text-center space-y-2">
              <Lock className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Prevention</h3>
              <p className="text-sm text-muted-foreground">Implement best practices</p>
            </div>
            <div className="text-center space-y-2">
              <Award className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-semibold text-foreground">Reporting</h3>
              <p className="text-sm text-muted-foreground">Learn Incident reporting concepts</p>
            </div>
          </div>

          {/* Information Panel */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Training Overview</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Duration:</strong> 15-20 minutes
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Format:</strong> Interactive challenges
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Difficulty:</strong> Beginner to Intermediate
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vigilance:</strong> learnt upon completion
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-secondary/30 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Email security best practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Password and authentication security</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Social engineering awareness</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Incident response procedures</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Information */}
          <div className="bg-card/30 border border-border/50 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Presented to you by the InfoSec Team</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Committed to keeping our organization secure and compliant
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button 
              onClick={startGame} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold cyber-glow"
            >
              Start Security Challenge
            </Button>
            <p className="text-sm text-muted-foreground">
              Complete 4 interactive challenges to find out what InfoSec team at Syncron Prepared for you.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WelcomePage;
