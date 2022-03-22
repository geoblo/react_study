import { useState, useEffect } from 'react';

export default function Hooks024() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);
    console.log('effect');

    return () => {
      console.log('resize');
      window.removeEventListener('resize', resize);
    };
  }, []);

  return width;
}
