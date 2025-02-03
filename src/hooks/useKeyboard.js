import { useEffect } from 'react';

export const useKeyboard = (onEscape) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onEscape();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);
};
