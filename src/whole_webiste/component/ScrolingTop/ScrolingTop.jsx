import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to the top before the new page is rendered
const ScrolingTop = () => {
  const location = useLocation();  

  useLayoutEffect(() => {
   
    window.scrollTo(0, 0);
  }, [location]);  

  return null;  
};

export default ScrolingTop;
