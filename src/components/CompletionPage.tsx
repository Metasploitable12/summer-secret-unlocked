import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useGame } from './GameContext';
import { Trophy, ExternalLink, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SecurityHeader from './SecurityHeader';

const CompletionPage: React.FC = () => {
  const { revealedLetters, resetGame } = useGame();
  const [constructedUrl, setConstructedUrl] = useState('');
  const { toast } = useToast();

  // The secret code is formed by the letters: I-S-4-U = "IS4U"
  const secretCode = revealedLetters.join('');
  const expectedCode = 'IS4U';
  const targetUrl = 'https://syncron.atlassian.net/wiki/x/UwDPZg';

  const handleUrlSubmit = () => {
    if (secretCode === expectedCode) {
      toast({
        title: "🎉 Outstanding Work!",
        description: "Redirecting to reveal the list of amazing events InfoSec team prepared for you..",
      });
      setTimeout(() => {
        window.open(targetUrl, '_blank');
      }, 1500);
    } else {
      toast({
        title: "Code Incomplete",
        description: "Complete all challenges to reveal the full code!",
        variant: "destructive",
      });
    }
  };

  const handleDirectAccess = () => {
    if (secretCode === expectedCode) {
      window.open(targetUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SecurityHeader />
      <div className="flex items-center justify-center p-6">
      <Card className="max-w-3xl w-full p-8 cyber-glow bg-card shadow-lg border-2 border-primary/20">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Trophy className="w-12 h-12 text-primary-foreground" />
          </div>

          {/* Congratulations Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold spooky-text">
              TRIVIA COMPLETE
            </h1>
            <p className="text-xl text-muted-foreground">
              Congratulations! You've successfully completed the Security Trivia!
            </p>
          </div>

          {/* Revealed Letters */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Your Revealed Letters:</h2>
            <div className="flex gap-4 justify-center">
              {revealedLetters.map((letter, index) => (
                <div key={index} className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center cyber-glow">
                  <span className="text-primary font-bold text-2xl">{letter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* URL Construction */}
          <div className="space-y-6 bg-secondary p-6 rounded-lg border border-primary/10">
            <h3 className="text-lg font-semibold text-foreground">
              🔓 It's Finally Time To Unlock Something Amazing
            </h3>
            <p className="text-sm text-muted-foreground">
              Stay Tuned for more updates in you PM soon, 
            </p>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg border border-primary/5">
                <p className="text-sm text-muted-foreground">Rememember, there's nothing more rewarding than you speed </p>
                <code className="text-accent font-mono">
                  You've collected: {secretCode} {secretCode === expectedCode ? '= InfoSec For You' : `(Need: ${expectedCode})`}
                </code>
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={constructedUrl}
                  onChange={(e) => setConstructedUrl(e.target.value)}
                  placeholder="Enter the letters you have collected."
                  className="flex-1 border-primary/20 focus:border-primary"
                />
                <Button 
                  onClick={handleUrlSubmit}
                  disabled={constructedUrl !== expectedCode}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ExternalLink className="w-4 h-4" />
                  Access
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-secondary p-6 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-3"> What You Learned</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Email verification protocols</li>
                <li>• Concept of encryption</li>
                <li>• Secure URL identification</li>
                <li>• Social engineering awareness</li>
              </ul>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-3"> Next Steps</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Complete your security assessment</li>
                <li>• Complete your personalized training</li>
                <li>• Keep an eye on upcoming updates</li>
                <li>• Report anything you think is suspicious </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-6">
            <Button 
              onClick={resetGame}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default CompletionPage;
