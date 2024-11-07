import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './whole_webiste/Home/Home.jsx'
import Sona_About from './whole_webiste/Sona_About/Sona_About.jsx';
import Industry from './whole_webiste/Industry/Industry.jsx';
import Aluminum_Pro from './whole_webiste/Aluminum-Products/Aluminum_Pro.jsx';
import Careers from './whole_webiste/Resources/Careers/Careers.jsx';
import Laminated_Tubs from './whole_webiste/Laminated_Tubs/Laminated_Tubs.jsx';
// import Careers from './whole_webiste/Resources/Careers/Careers.jsx';


// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Sona_About />} />
          <Route path="/Industry" element={<Industry />} />
          <Route path="/Aluminum-Products" element={<Aluminum_Pro />} />
          <Route path="/Resources/Careers" element={<Careers />} />
          <Route path="/Laminated-Tubs" element={<Laminated_Tubs />} /> 
        </Routes>
      </Router>

    </>
  )
}

export default App






// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // Use lazy loading for components
// const Home = lazy(() => import('./whole_webiste/Home/Home.jsx'));
// const Sona_About = lazy(() => import('./whole_webiste/Sona_About/Sona_About.jsx'));
// const Industry = lazy(() => import('./whole_webiste/Industry/Industry.jsx'));
// const Aluminum_Pro = lazy(() => import('./whole_webiste/Aluminum-Products/Aluminum_Pro.jsx'));
// const Resources = lazy(() => import('./whole_webiste/Resources/Resources.jsx'));
// const Laminated_Tubs = lazy(() => import('./whole_webiste/Laminated_Tubs/Laminated_Tubs.jsx'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<Sona_About />} />
//           <Route path="/Industry" element={<Industry />} />
//           <Route path="/Aluminum-Products" element={<Aluminum_Pro />} />
//           <Route path="/Resources" element={<Resources />} />
//           <Route path="/Laminated-Tubs" element={<Laminated_Tubs />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

