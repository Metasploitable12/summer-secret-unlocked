import React, { createContext, useContext, useState, ReactNode } from 'react';

// Game state interface
interface GameContextType {
  gameStarted: boolean;
  currentStep: number;
  gameCompleted: boolean;
  revealedLetters: string[];
  startGame: () => void;
  nextStep: () => void;
  addRevealedLetter: (letter: string) => void;
  resetGame: () => void;
}

// Create the context
const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider component
export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(true); // Auto-start the game
  const [currentStep, setCurrentStep] = useState(1); // Start with first challenge
  const [gameCompleted, setGameCompleted] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState<string[]>([]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentStep(1);
    setGameCompleted(false);
    setRevealedLetters([]);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setGameCompleted(true);
      setCurrentStep(0);
    }
  };

  const addRevealedLetter = (letter: string) => {
    setRevealedLetters(prev => [...prev, letter]);
  };

  const resetGame = () => {
    setGameStarted(true);
    setCurrentStep(1);
    setGameCompleted(false);
    setRevealedLetters([]);
  };

  const value: GameContextType = {
    gameStarted,
    currentStep,
    gameCompleted,
    revealedLetters,
    startGame,
    nextStep,
    addRevealedLetter,
    resetGame,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the game context
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};