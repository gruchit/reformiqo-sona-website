import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to the top before the new page is rendered
const ScrolingTop = () => {
  const location = useLocation();  // Detect route changes

  useLayoutEffect(() => {
    // Scroll to the top immediately before rendering the new content
    window.scrollTo(0, 0);
  }, [location]);  // Trigger when the location (route) changes

  return null;  // This component doesn't render anything, just handles scroll
};

export default ScrolingTop;
