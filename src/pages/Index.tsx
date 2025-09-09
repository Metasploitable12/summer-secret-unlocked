import React from 'react';
import { GameProvider, useGame } from '@/components/GameContext';
import WelcomePage from '@/components/WelcomePage';
import GameStep from '@/components/GameStep';
import CompletionPage from '@/components/CompletionPage';
import SpookyBackground from '@/components/SpookyBackground';

const GameContent: React.FC = () => {
  const { gameStarted, currentStep, gameCompleted } = useGame();

  if (gameCompleted) {
    return <CompletionPage />;
  }

  if (gameStarted && currentStep > 0) {
    return <GameStep />;
  }

  return <WelcomePage />;
};

const Index = () => {
  return (
    <GameProvider>
      <div className="relative min-h-screen">
        <SpookyBackground />
        <div className="relative z-10">
          <GameContent />
        </div>
      </div>
    </GameProvider>
  );
};

export default Index;
