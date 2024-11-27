import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./whole_webiste/component/Loader/Loader.jsx"; // Existing Loader Component

// Lazy Loaded Components
const Home = lazy(() => import("./whole_webiste/Home/Home.jsx"));
const OurStore = lazy(() => import("./whole_webiste/Home_AboutUs/Our_Store/Sona_About.jsx"));
const AdvatagesSona = lazy(() => import("./whole_webiste/Home_AboutUs/Advantages_Sona/AdvantagesSona.jsx"));
const ManufacturingUnit = lazy(() => import("./whole_webiste/Home_AboutUs/ManufacturingUnit/ManufacturingUnit.jsx"));
const Enviro_Friendly = lazy(() => import("./whole_webiste/Home_AboutUs/Enviro-Friendly/Enviro_Friendly.jsx"));
const Brochures = lazy(() => import("./whole_webiste/Home_AboutUs/Brochures/Brochures.jsx"));
const IndustryHome = lazy(() => import("./whole_webiste/Industry/IndustryHome/Industry.jsx"));
const Pharmaceutical = lazy(() => import("./whole_webiste/Industry/Pharmaceutical/pharmaceutical.jsx"));
const Cosm_Per = lazy(() => import("./whole_webiste/Industry/cosm_&_per/Cosm_Per.jsx"));
const Nutraceutical = lazy(() => import("./whole_webiste/Industry/Nutraceutical/Nutrac.jsx"));
const Indust_Agro = lazy(() => import("./whole_webiste/Industry/Indust_&_Agro/Indu_Ago.jsx"));
const Aluminum_Pro = lazy(() => import("./whole_webiste/Aluminum-Products/AlumProductHome/Aluminum_Pro.jsx"));
const Collapsible = lazy(() => import("./whole_webiste/Aluminum-Products/CollapsibleTube/CollapsibleTube.jsx"));
const FlaskBottles = lazy(() => import("./whole_webiste/Aluminum-Products/Flasks&Bottles/Flask_Bottles.jsx"));
const TableCanisters = lazy(() => import("./whole_webiste/Aluminum-Products/TabletCanisters/TabletCanisters.jsx"));
const Careers = lazy(() => import("./whole_webiste/Resources/Careers/Careers.jsx"));
const BlogMedia = lazy(() => import("./whole_webiste/Resources/Blogs&Media/BlogMedia.jsx"));
const Gallery = lazy(() => import("./whole_webiste/Resources/Gallery/Gallery.jsx"));
const Laminated_Tubs = lazy(() => import("./whole_webiste/Laminated_Tubs/Laminated_Tubs.jsx"));
const ReachUs = lazy(() => import("./whole_webiste/ReachUs/ReachUs/ReachUs.jsx"));
const Error = lazy(() => import("./whole_webiste/component/ErrorPages/ErrorPage.jsx"));

function App() {
  // const [loading, setLoading] = useState(true); 
  // useEffect(() => {
    // const handleLoad = () => {
      // setLoading(false); 
    // };
    // window.addEventListener("load", handleLoad);

    // return () => {
      // window.removeEventListener("load", handleLoad);
    // };
  // }, []);

  return (
    <>
      
      {/* {loading && <Loader />} */}

      
      {/* {!loading && ( */}
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Home Page */}
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
          </Suspense>
        </Router>
      {/* )} */}
    </>
  );
}

export default App;
