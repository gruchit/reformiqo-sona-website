import React, { useEffect } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
const BrandOne = lazy(() => import("./whole_webiste/SubPages/Brand1/BrandOne.jsx"));
const BrandTwo = lazy(() => import("./whole_webiste/SubPages/Brand1/BrandTwo.jsx"));
const BenifitColla = lazy(() => import("./whole_webiste/SubPages/Brand1/BenifitColla.jsx"));
const BlogPharm = lazy(() => import("./whole_webiste/SubPages/Brand1/BlogPharm.jsx"));
const CustomSolutions = lazy(() => import("./whole_webiste/SubPages/Brand1/CustomSolutions.jsx"));
const BenifitAllum = lazy(() => import("./whole_webiste/SubPages/Brand1/BenifitAllum.jsx"));
const BoostBrand = lazy(() => import("./whole_webiste/SubPages/Brand1/BoostBrand.jsx"));
const AllumColl = lazy(() => import("./whole_webiste/SubPages/Brand1/AllumColl.jsx"));
const PharmaPack = lazy(() => import("./whole_webiste/SubPages/Brand1/PharmaPack.jsx"));
const ExpertType = lazy(() => import("./whole_webiste/SubPages/Brand1/ExpertType.jsx"));
const BenifitsFeature = lazy(() => import("./whole_webiste/SubPages/Brand1/BenifitsFeature.jsx"));
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
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About/Our-Story" element={<OurStore />} />
              <Route path="/About/Advatages-Sona" element={<AdvatagesSona />} />
              <Route path="/About/Manufacturing-Unit" element={<ManufacturingUnit />} />
              <Route path="/About/Enviro-Friendly" element={<Enviro_Friendly />} />
              <Route path="/About/Brochures" element={<Brochures />} />

              <Route path="/Industry" element={<IndustryHome />} />
              <Route path="/Industry/Pharmaceutical" element={<Pharmaceutical />} />
              <Route path="/Industry/Cosmetic-And-Personal-Care" element={<Cosm_Per />} />
              <Route path="/Industry/Nutraceutical" element={<Nutraceutical />} />
              <Route path="/Industry/Industrial-And-Agro-Chemical" element={<Indust_Agro />} />

              <Route path="/Aluminum-Products" element={<Aluminum_Pro />} />
              <Route path="/Aluminum-Products/Collapsible-Tubes" element={<Collapsible />} />
              <Route path="/Aluminum-Products/Flasks-And-Bottles" element={<FlaskBottles />} />
              <Route path="/Aluminum-Products/Tablet-Canisters" element={<TableCanisters />} />

              <Route path="/Resources/Careers" element={<Careers />} />
              <Route path="/Resources/BlogMedia" element={<BlogMedia />} />
              <Route path="/Resources/Gallery" element={<Gallery />} />
              <Route path="/Laminated-Tubs" element={<Laminated_Tubs />} />
              {/* SubPages */}

              {/* Job */}
              <Route path="/ProductionSup" element={<ProductionSup />} />
              <Route path="/Machine-Operator" element={<MachineOp />} />
              <Route path="/Assistant-Ipqc-Executive" element={<AssistantExe />} />

              {/* Blog */}
              <Route path="/FuturAluminum" element={<FuturAluminium />} />
              <Route path="/DefineAdvantages" element={<DefineAdvantages />} />
              <Route path="/Pioneering-in-Manufacturing-of-Tubes" element={<BrandOne />} />
              <Route path="/Factors-for-Choosing-the-Pharma-Packaging-Partner" element={<BlogPharm />} />
              <Route path="/Benefits-of-Using-Tubes-in-Pharma-Products" element={<BenifitColla />} />
              <Route path="/Trust-Sona-Extrusion-for-Packaging-Solutions" element={<BrandTwo />} />
              <Route path="/Custom-Pharmaceutical-Packaging-Solutions" element={<CustomSolutions />} />
              <Route path="/Benefits-of-Aluminium-Tubes-for-Liquid-Pharma-Products" element={<BenifitAllum />} />
              <Route path="/Boost-Brand-Using-Personal-Care-Products-Packaging" element={<BoostBrand />} />

              <Route path="/Benefits-of-Aluminum-Collapsible-Tubes" element={<AllumColl />} />
              <Route path="/Best-Practices-in-Pharmaceutical-Packaging" element={<PharmaPack />} />
              <Route path="/Types-of-Pharmaceutical-Packaging-Solutions" element={<ExpertType />} />
              <Route path="/Benefits-of-Airtight-Tablet-Canisters-in-Pharma-Industry" element={<BenifitsFeature />} />
              
              <Route path="/ReachUs" element={<ReachUs />} />
              <Route path="*" element={<Error />} />

              {/* Navigation */}
              
              <Route path="/FuturAluminium" element={<Navigate to="/FuturAluminum" replace />} />
              {/* <Route path="/Resources/BlogMedia/" element={<Navigate to="/Resources/BlogMedia" replace />} /> */}
              <Route path="/About/Our-Store/" element={<Navigate to="/About/Our-Story" replace />} />
              <Route path="/enviro-friendly/" element={<Navigate to="/About/Enviro-Friendly" replace />} />
              <Route path="/jobs/production-supervisor/" element={<Navigate to="/ProductionSup" replace />} />
              <Route path="/advantages-sona/" element={<Navigate to="/About/Advatages-Sona" replace />} />
              <Route path="/contact-us/" element={<Navigate to="/ReachUs" replace />} />
              <Route path="/jobs/assistant-ipqc-executive/" element={<Navigate to="/Assistant-Ipqc-Executive" replace />} />
              <Route path="/footer/footer-main/" element={<Navigate to="/" replace />} />
              <Route path="/service/cosmetic-and-personal-care/" element={<Navigate to="/Industry/Cosmetic-And-Personal-Care" replace />} />
              <Route path="/service/nutraceutical/" element={<Navigate to="/Industry/Nutraceutical" replace />} />
              <Route path="/jobs/machine-operator/" element={<Navigate to="/Machine-Operator" replace />} />
              <Route path="/service/industrial-and-agro-chemical/" element={<Navigate to="/Industry/Industrial-And-Agro-Chemical" replace />} />
              <Route path="/service/collapsible-tubes/" element={<Navigate to="/Aluminum-Products/Collapsible-Tubes" replace />} />
              <Route path="/contact-us-0/" element={<Navigate to="/ReachUs" replace />} />
              <Route path="/enquiry/" element={<Navigate to="/ReachUs" replace />} />
              <Route path="/brochures/" element={<Navigate to="/About/Brochures" replace />} />
              <Route path="/careers/" element={<Navigate to="/Resources/Careers" replace />} />
              <Route path="/our-story/" element={<Navigate to="/About/Our-Story" replace />} />
              <Route path="/the-future-of-aluminium-collapsible-tubes/" element={<Navigate to="/FuturAluminum" replace />} />
              <Route path="/service/flasks-and-bottles/" element={<Navigate to="/Aluminum-Products/Flasks-And-Bottles" replace />} />
              <Route path="/service/tablet-canisters/" element={<Navigate to="/Aluminum-Products/Tablet-Canisters" replace />} />
              <Route path="/manufacturing-unit/" element={<Navigate to="/About/Manufacturing-Unit" replace />} />
              <Route path="/gallery/" element={<Navigate to="/Resources/Gallery" replace />} />
              <Route path="/industries/" element={<Navigate to="/Industry" replace />} />
              <Route path="/aluminium-products/" element={<Navigate to="/Aluminum-Products" replace />} />
              <Route path="/service/pharmaceutical/" element={<Navigate to="/Industry/Pharmaceutical" replace />} />
              <Route path="/service/nutraceuticals/" element={<Navigate to="/Industry/Nutraceutical" replace />} />
              <Route path="/BlogMedia/" element={<Navigate to="/Resources/BlogMedia" replace />} />
              <Route path="/blogs-media/" element={<Navigate to="/Resources/BlogMedia" replace />} />
              <Route path="/jobs/" element={<Navigate to="/Resources/Careers" replace />} />
              <Route path="/define-the-advantages-and-application-technological-effectiveness-in-the-field-of-aluminium-collapsible-tubes/" element={<Navigate to="/DefineAdvantages" replace />} />

              {/* <Route path="" element={<Navigate to="" replace />} /> */}

            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}



export default App;
