import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Jab bhi route path change hoga, useLocation isko detect karega
  const { pathname } = useLocation();

  useEffect(() => {
    // Page ko directly top zero pixel par move kar dega instantly/smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant zero jump setup best hai routing ke liye
    });
  }, [pathname]);

  return null; // Iska apna koi UI design nahi hai, ye background execution code hai
};

export default ScrollToTop;