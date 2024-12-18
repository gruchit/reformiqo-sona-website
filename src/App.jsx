import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Loader from "./whole_webiste/component/Loader/Loader.jsx"; 
import { Suspense, lazy } from "react";

// Lazy Loaded Components
const Home = lazy(() => import("./whole_webiste/Home/Home.jsx"));
const OurStore = lazy(() => import("./whole_webiste/Home_AboutUs/Our_Store/Sona_About.jsx"));
const AdvatagesSona = lazy(() => import("./whole_webiste/Home_AboutUs/Advantages_Sona/AdvantagesSona.jsx"));
const ManufacturingUnit = lazy(() => import("./whole_webiste/Home_AboutUs/ManufacturingUnit/ManufacturingUnit.jsx"));
const Enviro_Friendly = lazy(() => import("./whole_webiste/Home_AboutUs/Enviro-Friendly/Enviro_Friendly.jsx"));
const Brochures = lazy(() => import("./whole_webiste/Home_AboutUs/Brochures/BrocherMain.jsx"));
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
const ProductionSup = lazy(() => import("./whole_webiste/SubPages/Production Supervisor/ProductionSup.jsx"));
const MachineOp = lazy(() => import("./whole_webiste/SubPages/Machine operator/MachineOp.jsx"));
const AssistantExe = lazy(() => import("./whole_webiste/SubPages/Assistant Ipqc Executive/AssistantExe.jsx"));
const DefineAdvantages = lazy(() => import("./whole_webiste/SubPages/DefineAdvantages/Define.jsx"));
const FuturAluminium = lazy(() => import("./whole_webiste/SubPages/FutureAluminium/Future.jsx"));
// const  


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  
  return (
    <>
      <HelmetProvider> 
        <Router>
          <ScrollToTop />
            <Suspense fallback={<Loader />}>          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About/Our-Store/" element={<OurStore />} />
              <Route path="/About/Advatages-Sona/" element={<AdvatagesSona />} />
              <Route path="/About/Manufacturing-Unit/" element={<ManufacturingUnit />} />
              <Route path="/About/Enviro-Friendly/" element={<Enviro_Friendly />} />
              <Route path="/About/Brochures/" element={<Brochures />} />
              <Route path="/Industry/" element={<IndustryHome />} />
              <Route path="/Industry/Pharmaceutical/" element={<Pharmaceutical />} />
              <Route path="/Industry/Cosmetic-And-Personal-Care/" element={<Cosm_Per />} />
              <Route path="/Industry/Nutraceutical/" element={<Nutraceutical />} />
              <Route path="/Industry/Industrial-And-Agro-Chemical/" element={<Indust_Agro />} />
              <Route path="/Aluminum-Products/" element={<Aluminum_Pro />} />
              <Route path="/Aluminum-Products/Collapsible-Tubes/" element={<Collapsible />} />
              <Route path="/Aluminum-Products/Flasks-And-Bottles/" element={<FlaskBottles />} />
              <Route path="/Aluminum-Products/Tablet-Canisters/" element={<TableCanisters />} />
              <Route path="/Resources/Careers/" element={<Careers />} />
              <Route path="/Resources/BlogMedia/" element={<BlogMedia />} />
              <Route path="/Resources/Gallery/" element={<Gallery />} />
              <Route path="/Laminated-Tubs/" element={<Laminated_Tubs />} />
              {/* SubPages */}
              
              {/* Job */}
              <Route path="/ProductionSup/" element={<ProductionSup />} />
              <Route path="/Machine-Operator/" element={<MachineOp />} />
              <Route path="/Assistant-Ipqc-Executive/" element={<AssistantExe />} />
              {/* Blog */}
              <Route path="/DefineAdvantages/" element={<DefineAdvantages />} />
              <Route path="/FuturAluminium/" element={<FuturAluminium />} />

              <Route path="/ReachUs/" element={<ReachUs />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
