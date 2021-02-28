import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function useChallenges() {
  const context = useContext(ChallengesContext);

  if (!context) {
    console.error('useChallenges must be used within a ChallengesProvider');
    return;
  }

  return context;
}
