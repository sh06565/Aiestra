import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      setScrollPosition(currentScrollPosition);
      
      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return { scrollPosition, scrollDirection };
}
