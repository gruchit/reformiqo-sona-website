import React, { useEffect, useState } from 'react';
import '../../assets/fonts/fonts.css'
import Top from '../component/Top/Top'
import Header from '../component/Header/Header'
import Focus from './Focus'
import AboutSonaEx from './AboutSonaEx'
import YearOf from './YearOf'
import Product from './Product'
import Infinite from './Infinite'
import MarketLe from './MarketLe'
import Order from './Order'
import Our_client from './Our_client'
import UpComingEv from './UpComingEv'
import SonaMap from './SonaMap'
import Trusted from './Trusted'
import Counter from './Counter'
import Footer from '../component/Footer/Footer'
import BlogTxt from '../Resources/Blogs&Media/BlogTxt'
import Helmet  from 'react-helmet';
import Loader from "../component/Loader/Loader.jsx";

function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sona Extrusion",
    "legalName": "Sona Extrusion Pvt Ltd",
    "url": "https://sonaextrusion.com/",
    "logo": "https://sonaextrusion.com/assets/DownloadLogo-e953ReQ0.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 470, 471 & 472,",
      "addressLocality": "New G.I.D.C, Kabilpore,",
      "addressRegion": "Navsari",
      "postalCode": "396 424",
      "addressCountry": "India",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+91 9227663451",
      "email": "contact@sonaextrusion.com",
      "areaServed": "IN",
      "availableLanguage": "en",
    },
  };
  

  return (
    <>
      <Helmet>
        <title>Sona Extrusion: Your Trusted Packaging Solution Provider</title>
        {/* <meta name="keywords" content="company, products, services, home, business" /> */}
        <meta name="description" content="Sona Extrusion is a premier manufacturer of aluminium collapsible tubes, containers, bottles, and Laminated Tubes committed to quality in packaging solutions." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Top />
      <Header  />
      <Focus type="Home" />
      <AboutSonaEx />
      <YearOf />
      <Trusted />
      <Counter />
      <Product type="Home"/>
      <Infinite />
      <MarketLe />
      <Order />
      <Our_client />
      {/* <UpComingEv /> */}
      <BlogTxt Type="Home" />
      <SonaMap />
      <Footer />
    </>
  )
}

export default Home
