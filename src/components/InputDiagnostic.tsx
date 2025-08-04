import React, { useEffect } from 'react';

export const InputDiagnostic: React.FC = () => {
  useEffect(() => {
    // Check if input exists
    const checkInput = () => {
      const input = document.getElementById('api-spend-input');
      if (input) {
        console.log('✅ Input found:', input);
        
        // Check computed styles
        const styles = window.getComputedStyle(input);
        console.log('Input styles:', {
          pointerEvents: styles.pointerEvents,
          zIndex: styles.zIndex,
          position: styles.position,
          userSelect: styles.userSelect,
          cursor: styles.cursor,
          display: styles.display,
          visibility: styles.visibility,
          opacity: styles.opacity
        });
        
        // Check if input is actually clickable
        const rect = input.getBoundingClientRect();
        const elementAtPoint = document.elementFromPoint(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );
        
        if (elementAtPoint === input) {
          console.log('✅ Input is clickable - no elements blocking it');
        } else {
          console.log('❌ Element blocking input:', elementAtPoint);
        }
        
        // Add test listeners
        input.addEventListener('click', () => console.log('🖱️ Input clicked!'));
        input.addEventListener('focus', () => console.log('🎯 Input focused!'));
        input.addEventListener('input', (e) => console.log('⌨️ Input value:', (e.target as HTMLInputElement).value));
      } else {
        console.log('❌ Input not found');
      }
    };
    
    // Check immediately and after a delay
    setTimeout(checkInput, 1000);
    setTimeout(checkInput, 3000);
    
    // Also log any click events on the page
    document.addEventListener('click', (e) => {
      console.log('Page clicked at:', e.target);
    });
  }, []);
  
  return null;
};