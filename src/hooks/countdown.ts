import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function useCountdown() {
  const context = useContext(CountdownContext);

  if (!context) {
    console.error('useCountdown must be used within a CountdownProvider');
    return;
  }

  return context;
}
