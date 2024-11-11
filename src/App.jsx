import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sona_About from './whole_webiste/Sona_About/Sona_About.jsx';

// Home
import Home from './whole_webiste/Home/Home.jsx'

// About   in Home....

import OurStore from './whole_webiste/Home_AboutUs/Our_Store/OurStore.jsx'
import AdvatagesSona from './whole_webiste/Home_AboutUs/Advantages_Sona/AdvantagesSona.jsx'
import ManufacturingUnit from './whole_webiste/Home_AboutUs/ManufacturingUnit/ManufacturingUnit.jsx'
import Enviro_Friendly from './whole_webiste/Home_AboutUs/Enviro-Friendly/Enviro_Friendly.jsx'
import Brochures from './whole_webiste/Home_AboutUs/Brochures/Brochures.jsx'

// Industry
import IndustryHome from './whole_webiste/Industry/IndustryHome/Industry.jsx';
import Pharmaceutical from './whole_webiste/Industry/Pharmaceutical/pharmaceutical.jsx';
import Cosm_Per from './whole_webiste/Industry/cosm_&_per/Cosm_Per.jsx';
import Nutraceutical from './whole_webiste/Industry/Nutraceutical/Nutrac.jsx';
import Indust_Agro from './whole_webiste/Industry/Indust_&_Agro/Indu_Ago.jsx';


// Aluminum-Products
import Aluminum_Pro from './whole_webiste/Aluminum-Products/AlumProductHome/Aluminum_Pro.jsx';
import Collapsible from  './whole_webiste/Aluminum-Products/CollapsibleTube/CollapsibleTube.jsx';
import FlaskBottles from  './whole_webiste/Aluminum-Products/Flasks&Bottles/Flask_Bottles.jsx';
import TableCanisters from  './whole_webiste/Aluminum-Products/TabletCanisters/TabletCanisters.jsx';


// Resources
import Careers from './whole_webiste/Resources/Careers/Careers.jsx';
import BlogMedia from './whole_webiste/Resources/Blogs&Media/BlogMedia.jsx';
import Gallery from './whole_webiste/Resources/Gallery/Gallery.jsx';

// LaminatedTubs
import Laminated_Tubs from './whole_webiste/Laminated_Tubs/Laminated_Tubs.jsx';


// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaIndustry } from 'react-icons/fa';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<Home />} />


          {/* AboutHome */}
          <Route path="/About/Our-Store/" element={<OurStore />} />
          <Route path="/About/Advatages-Sona/" element={<AdvatagesSona />} />
          <Route path="/About/Manufacturing-Unit/" element={<ManufacturingUnit />} />
          <Route path="/About/Enviro-Friendly/" element={<Enviro_Friendly />} />
          <Route path="/About/Brochures/" element={<Brochures />} />


          {/* Industry */}
          <Route path="/Industry/" element={<IndustryHome />} />
          <Route path="/Industry/Pharmaceutical/" element={<Pharmaceutical />} />
          <Route path="/Industry/Cosmetic-And-Personal-Care/" element={<Cosm_Per />} />
          <Route path="/Industry/Nutraceutical/" element={<Nutraceutical />} />
          <Route path="/Industry/Industrial-And-Agro-Chemical/" element={<Indust_Agro />} />

          {/* Aluminum-Products */}
          <Route path="/Aluminum-Products/" element={<Aluminum_Pro />} />
          <Route path="/Aluminum-Products/Collapsible-Tubes/" element={<Collapsible />} />
          <Route path="/Aluminum-Products/Flasks-And-Bottles/" element={<FlaskBottles />} />
          <Route path="/Aluminum-Products/Tablet-Canisters/" element={<TableCanisters />} />

          {/* Resources */}
          <Route path="/Resources/Careers/" element={<Careers />} />
          <Route path="/Resources/BlogMedia/" element={<BlogMedia />} />
          <Route path="/Resources/Gallery/" element={<Gallery />} />

          {/* LaminatedTubs */}
          <Route path="/Laminated-Tubs/" element={<Laminated_Tubs />} /> 
           


          <Route path="/About" element={<Sona_About />} />
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

