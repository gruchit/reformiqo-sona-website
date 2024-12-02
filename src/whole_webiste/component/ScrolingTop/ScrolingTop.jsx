import React from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrolingTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrolingTop;

// import React from 'react';
// import { useLayoutEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrolingTop = ({ onScrollComplete }) => {
//   const { pathname } = useLocation();
//   const [isScrolling, setIsScrolling] = useState(false);

//   useLayoutEffect(() => {
//     setIsScrolling(true);
//     window.scrollTo(0, 0);

//     const scrollTimeout = setTimeout(() => {
//       setIsScrolling(false);
//       onScrollComplete?.(); // Notify when scrolling is done
//     }, 0); // Minimal delay to ensure smooth transition

//     return () => clearTimeout(scrollTimeout);
//   }, [pathname, onScrollComplete]);

//   return isScrolling ? <div>Loading...</div> : null;
// };

// export default ScrolingTop;
