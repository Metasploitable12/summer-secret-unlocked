import React from 'react';
import { GameProvider, useGame } from '@/components/GameContext';
import GameStep from '@/components/GameStep';
import CompletionPage from '@/components/CompletionPage';
import ProfessionalBackground from '@/components/ProfessionalBackground';

const GameContent: React.FC = () => {
  const { currentStep, gameCompleted } = useGame();

  if (gameCompleted) {
    return <CompletionPage />;
  }

  return <GameStep />;
};

const Index = () => {
  return (
    <GameProvider>
      <div className="relative min-h-screen">
        <ProfessionalBackground />
        <div className="relative z-10">
          <GameContent />
        </div>
      </div>
    </GameProvider>
  );
};

export default Index;
