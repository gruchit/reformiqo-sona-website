import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Loader from "./whole_webiste/component/Loader/Loader.jsx"; 
// Lazy Loaded Components
import ScrolingTop from "./whole_webiste/component/ScrolingTop/ScrolingTop.jsx";
import Home from './whole_webiste/Home/Home.jsx';
import OurStore from './whole_webiste/Home_AboutUs/Our_Store/Sona_About.jsx';
import AdvatagesSona from './whole_webiste/Home_AboutUs/Advantages_Sona/AdvantagesSona.jsx';
import ManufacturingUnit from './whole_webiste/Home_AboutUs/ManufacturingUnit/ManufacturingUnit.jsx';
import Enviro_Friendly from './whole_webiste/Home_AboutUs/Enviro-Friendly/Enviro_Friendly.jsx';
import Brochures from './whole_webiste/Home_AboutUs/Brochures/Brochures.jsx';
import IndustryHome from './whole_webiste/Industry/IndustryHome/Industry.jsx';
import Pharmaceutical from './whole_webiste/Industry/Pharmaceutical/pharmaceutical.jsx';
import Cosm_Per from './whole_webiste/Industry/cosm_&_per/Cosm_Per.jsx';
import Nutraceutical from './whole_webiste/Industry/Nutraceutical/Nutrac.jsx';
import Indust_Agro from './whole_webiste/Industry/Indust_&_Agro/Indu_Ago.jsx';
import Aluminum_Pro from './whole_webiste/Aluminum-Products/AlumProductHome/Aluminum_Pro.jsx';
import Collapsible from './whole_webiste/Aluminum-Products/CollapsibleTube/CollapsibleTube.jsx';
import FlaskBottles from './whole_webiste/Aluminum-Products/Flasks&Bottles/Flask_Bottles.jsx';
import TableCanisters from './whole_webiste/Aluminum-Products/TabletCanisters/TabletCanisters.jsx';
import Careers from './whole_webiste/Resources/Careers/Careers.jsx';
import BlogMedia from './whole_webiste/Resources/Blogs&Media/BlogMedia.jsx';
import Gallery from './whole_webiste/Resources/Gallery/Gallery.jsx';
import Laminated_Tubs from './whole_webiste/Laminated_Tubs/Laminated_Tubs.jsx';
import ReachUs from './whole_webiste/ReachUs/ReachUs/ReachUs.jsx';
import Error from './whole_webiste/component/ErrorPages/ErrorPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <HelmetProvider> {/* Wrap the entire application */}
      
      
         <Router>
         {/* <ScrolingTop/> */}
         <ScrollToTop />
            <Routes>
              Home Page
              
              <Route path="/" element={<Home />} />
              <Route path="/About/Our-Store/" element={<OurStore />} />
              <Route path="/About/Advatages-Sona/" element={<AdvatagesSona />} />
              <Route
                path="/About/Manufacturing-Unit/"
                element={<ManufacturingUnit />}
              />
              <Route
                path="/About/Enviro-Friendly/"
                element={<Enviro_Friendly />}
              />
              <Route path="/About/Brochures/" element={<Brochures />} />

              {/* Industry Pages */}
              <Route path="/Industry/" element={<IndustryHome />} />
              <Route
                path="/Industry/Pharmaceutical/"
                element={<Pharmaceutical />}
              />
              <Route
                path="/Industry/Cosmetic-And-Personal-Care/"
                element={<Cosm_Per />}
              />
              <Route
                path="/Industry/Nutraceutical/"
                element={<Nutraceutical />}
              />
              <Route
                path="/Industry/Industrial-And-Agro-Chemical/"
                element={<Indust_Agro />}
              />

              {/* Aluminum Products */}
              <Route path="/Aluminum-Products/" element={<Aluminum_Pro />} />
              <Route
                path="/Aluminum-Products/Collapsible-Tubes/"
                element={<Collapsible />}
              />
              <Route
                path="/Aluminum-Products/Flasks-And-Bottles/"
                element={<FlaskBottles />}
              />
              <Route
                path="/Aluminum-Products/Tablet-Canisters/"
                element={<TableCanisters />}
              />

              {/* Resources */}
              <Route path="/Resources/Careers/" element={<Careers />} />
              <Route path="/Resources/BlogMedia/" element={<BlogMedia />} />
              <Route path="/Resources/Gallery/" element={<Gallery />} />

              {/* Laminated Tubs */}
              <Route path="/Laminated-Tubs/" element={<Laminated_Tubs />} />

              {/* Reach Us */}
              <Route path="/ReachUs/" element={<ReachUs />} />

              {/* Error Page */}
              <Route path="*" element={<Error />} />
            </Routes>
        </Router>
        </HelmetProvider>
    </>
  );
}

export default App;
