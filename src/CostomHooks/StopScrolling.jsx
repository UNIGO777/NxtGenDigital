import { useEffect } from 'react';

const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore the original overflow style
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
};

export default useScrollLock;