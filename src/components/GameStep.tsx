import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useGame } from './GameContext';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Lock, Key, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Challenge {
  id: number;
  title: string;
  description: string;
  question: string;
  answer: string;
  letter: string;
  hint: string;
  revealHint: string;
  icon: React.ReactNode;
  type: 'mcq' | 'text';
  options?: string[];
}

// Question pools for rotation
const questionPools = [
  [
    {
      id: 1,
      title: "Email Security Alert",
      description: "Which of these should make you most suspicious in an email?",
      question: "Select the most suspicious indicator:",
      answer: "Mismatched link on hover",
      letter: "I",
      hint: "The link hides more than you think…",
      revealHint: "Look at the URL carefully, mortal… Danger is often disguised as trust.",
      icon: <AlertTriangle className="w-6 h-6" />,
      type: 'mcq',
      options: ["A funny GIF", "Mismatched link on hover", "Friendly greeting"]
    },
    {
      id: 1,
      title: "Email Content Analysis",
      description: "You're reviewing an email for suspicious content.",
      question: "What's most suspicious?",
      answer: "Spelling mistakes",
      letter: "I",
      hint: "The link hides more than you think…",
      revealHint: "Look at the URL carefully, mortal… Danger is often disguised as trust.",
      icon: <AlertTriangle className="w-6 h-6" />,
      type: 'mcq',
      options: ["Spelling mistakes", "Using your first name", "Company logo"]
    },
    {
      id: 1,
      title: "Email Attachment Warning",
      description: "You receive an email with various attachments.",
      question: "Which attachment should worry you most?",
      answer: ".exe from unknown sender",
      letter: "I",
      hint: "The link hides more than you think…",
      revealHint: "Look at the URL carefully, mortal… Danger is often disguised as trust.",
      icon: <AlertTriangle className="w-6 h-6" />,
      type: 'mcq',
      options: [".pdf from HR", ".exe from unknown sender", ".docx from IT"]
    }
  ],
  [
    {
      id: 2,
      title: "Word Puzzle Challenge",
      description: "Unscramble this security term: SIPSSWORDA",
      question: "What's the unscrambled word?",
      answer: "PASSWORD",
      letter: "S",
      hint: "Rearrange the letters, the word is watching you.",
      revealHint: "It's something you use every day to log in… Think security basics!",
      icon: <Lock className="w-6 h-6" />,
      type: 'text'
    },
    {
      id: 2,
      title: "Security Acronym Puzzle",
      description: "Unscramble this 3-letter security term: FAM",
      question: "What does FAM unscramble to?",
      answer: "MFA",
      letter: "S",
      hint: "Rearrange the letters, the word is watching you.",
      revealHint: "It's something you use every day to log in… Think security basics!",
      icon: <Lock className="w-6 h-6" />,
      type: 'text'
    },
    {
      id: 2,
      title: "Cyber Threat Puzzle",
      description: "Unscramble this cyber security threat: HSPHNIIG",
      question: "What's the unscrambled word?",
      answer: "PHISHING",
      letter: "S",
      hint: "Rearrange the letters, the word is watching you.",
      revealHint: "It's something you use every day to log in… Think security basics!",
      icon: <Lock className="w-6 h-6" />,
      type: 'text'
    }
  ],
  [
    {
      id: 3,
      title: "Safe Link Selection",
      description: "Which link is safest?",
      question: "Select the safest link:",
      answer: "https://intranet.syncron.com/training",
      letter: "4",
      hint: "The real one hides in plain sight…",
      revealHint: "HTTPS is your guiding light. Beware of imposters with lookalike domains.",
      icon: <Key className="w-6 h-6" />,
      type: 'mcq',
      options: ["http://syncron-login.com", "https://intranet.syncron.com/training", "https://syncron-secure.net"]
    },
    {
      id: 3,
      title: "Domain Verification",
      description: "Spot the real one:",
      question: "Which is the legitimate domain?",
      answer: "https://syncron.com/security",
      letter: "4",
      hint: "The real one hides in plain sight…",
      revealHint: "HTTPS is your guiding light. Beware of imposters with lookalike domains.",
      icon: <Key className="w-6 h-6" />,
      type: 'mcq',
      options: ["https://syncron.co", "https://syncron.com/security", "http://secure-syncron.org"]
    }
  ],
  [
    {
      id: 4,
      title: "InfoSec Security Alertness",
      description: "Where should our customers go to find up-to-date information about Syncron’s security posture?",
      question: "Select the most appropriate option:",
      answer: "Syncron’s Trust Center",
      letter: "U",
      hint: "Only believe official resources.",
      revealHint: "Look for the nost trustful source carefully, mortal… Danger is often disguised as trust.",
      icon: <AlertTriangle className="w-6 h-6" />,
      type: 'mcq',
      options: ["Syncron’s Trust Center", "Check on Google", "Ask ChatGPT"]
    },
    {
      id: 4,
        title: "InfoSec Security Alertness",
      description: "Which is an inappropriate place to report security incidents and concerns?",
      question: "Select the most inappropriate option:",
      answer: "Via EP Help Center",
      letter: "U",
      hint: "Route InfoSec questions directly to InfoSec.",
      revealHint: "All security incident related concerns must directly to reported to the InfoSec team",
      icon: <AlertTriangle className="w-6 h-6" />,
      type: 'mcq',
      options: ["Via infosec-incident@syncron.com", "Via IS-Help Center Teams channel", "Via EP Help Center"]
    },
    {
      id: 4,
      title: "InfoSec Security Alertness",
      description: "Where can get quick answers about InfoSec in Syncron?",
      question: "Select the most appropriate option:",
      answer: "InfoSec CoPilot",
      letter: "U",
      hint: "Only believe official resources.",
      revealHint: "Look for the nost trustful source carefully, mortal… Danger is often disguised as trust.",
      icon: <AlertTriangle className="w-6 h-6" />,
      type: 'mcq',
      options: ["ChatGPT", "InfoSec CoPilot", "Asking InfoSec team in chats"]
    }
  ]
];

// Get random challenge from each pool
const getRandomChallenge = (poolIndex: number) => {
  const pool = questionPools[poolIndex];
  return pool[Math.floor(Math.random() * pool.length)];
};

const challenges: Challenge[] = [
  getRandomChallenge(0),
  getRandomChallenge(1),
  getRandomChallenge(2),
  getRandomChallenge(3)
];

const GameStep: React.FC = () => {
  const { currentStep, nextStep, addRevealedLetter, revealedLetters } = useGame();
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showRevealHint, setShowRevealHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { toast } = useToast();

  const currentChallenge = challenges[currentStep - 1];
  const progress = (currentStep / 4) * 100;

  useEffect(() => {
    setUserAnswer('');
    setSelectedOption('');
    setShowHint(false);
    setShowRevealHint(false);
    setAttempts(0);
  }, [currentStep]);

  const handleSubmit = () => {
    const answerToCheck = currentChallenge.type === 'mcq' ? selectedOption : userAnswer.toUpperCase().trim();
    const correctAnswer = currentChallenge.type === 'mcq' ? currentChallenge.answer : currentChallenge.answer.toUpperCase();
    
    if (answerToCheck === correctAnswer) {
      addRevealedLetter(currentChallenge.letter);
      toast({
        title: "Excellent Work! 🎉",
        description: `You've cracked the code and revealed: ${currentChallenge.letter}`,
      });
      
      nextStep();
    } else {
      setAttempts(prev => prev + 1);
      if (attempts === 0) {
        setShowHint(true);
        toast({
          title: "Not quite right... 🤔",
          description: "Check out the hint below for guidance!",
          variant: "destructive",
        });
      } else if (attempts >= 1) {
        setShowRevealHint(true);
        toast({
          title: "Still stuck? 🆘",
          description: "The answer is revealed below - learn and move forward!",
          variant: "destructive",
        });
      }
    }
  };

  const handleRevealAnswer = () => {
    if (currentChallenge.type === 'mcq') {
      setSelectedOption(currentChallenge.answer);
    } else {
      setUserAnswer(currentChallenge.answer);
    }
    setShowRevealHint(true);
  };

  if (!currentChallenge) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full p-8 cyber-glow bg-card shadow-lg border-2 border-primary/20">
        <div className="space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Security Training Progress</span>
              <span className="text-primary font-medium">Step {currentStep} of 4</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Challenge Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="text-primary">{currentChallenge.icon}</div>
              <h2 className="text-2xl font-bold text-foreground">{currentChallenge.title}</h2>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border border-primary/10">
              <p className="text-foreground">{currentChallenge.description}</p>
            </div>
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">{currentChallenge.question}</h3>
            
            <div className="space-y-4">
              {currentChallenge.type === 'mcq' ? (
                <div className="space-y-3">
                  {currentChallenge.options?.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:bg-accent/10 ${
                        selectedOption === option
                          ? 'border-primary bg-primary/5 text-primary border-2'
                          : 'border-border bg-card hover:border-primary/30'
                      }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedOption === option ? 'border-primary' : 'border-muted-foreground'
                        }`}>
                          {selectedOption === option && (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your answer..."
                  className="text-center text-lg font-medium bg-input border-primary/20 focus:border-primary"
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
              )}
              
              {showHint && !showRevealHint && (
                <div className="bg-warning-glow/5 border border-warning-glow/30 p-3 rounded-lg animate-fade-in">
                  <p className="text-accent text-sm">
                    💡 Creative Hint: {currentChallenge.hint}
                  </p>
                </div>
              )}
              
              {showRevealHint && (
                <div className="bg-destructive/5 border border-destructive/30 p-4 rounded-lg animate-fade-in">
                  <p className="text-destructive text-sm font-medium mb-2">
                    🎯 Answer Revealed: {currentChallenge.answer}
                  </p>
                  <p className="text-destructive-foreground text-xs">
                    {currentChallenge.revealHint}
                  </p>
                </div>
              )}
              
              {attempts >= 1 && !showRevealHint && (
                <Button 
                  onClick={handleRevealAnswer}
                  variant="outline"
                  className="w-full border-primary text-black hover:bg-primary/5"
                >
                  🆘 Reveal Answer & Continue
                </Button>
              )}
              
              <Button 
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow"
                disabled={currentChallenge.type === 'mcq' ? !selectedOption : !userAnswer.trim()}
              >
                Submit Answer
              </Button>
            </div>
          </div>

          {/* Revealed Letters Display */}
          <div className="bg-secondary p-4 rounded-lg border border-primary/10">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Revealed Letters:</h4>
            <div className="flex gap-2 justify-center">
              {revealedLetters.map((letter, index) => (
                <div key={index} className="w-12 h-12 bg-primary/10 border-2 border-primary/40 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{letter}</span>
                </div>
              ))}
              {Array.from({ length: 4 - revealedLetters.length }).map((_, index) => (
                <div key={index + revealedLetters.length} className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">?</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameStep;
