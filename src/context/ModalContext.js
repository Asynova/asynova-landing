import { createContext, useContext, useState } from 'react';
import WaitlistModal from '../components/Modal/WaitlistModal';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <ModalContext.Provider value={{ openWaitlist, closeWaitlist }}>
      {children}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}