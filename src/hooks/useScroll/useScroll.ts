import { useState, useEffect, useCallback } from 'react';

const useScroll = (target: HTMLDivElement | null) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!target) return;

    const updatePosition = () => {
      setScrollPosition(target.scrollTop);
    };

    target.addEventListener('scroll', updatePosition);

    return () => target.removeEventListener('scroll', updatePosition);
  }, [target]);
  
  return scrollPosition;
};

export default useScroll;
