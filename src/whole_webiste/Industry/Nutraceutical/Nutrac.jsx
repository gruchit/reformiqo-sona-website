import React from 'react';
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import TopSliderPhar from '../Pharmaceutical/TopSliderPhar';
import PharmTxt from '../Pharmaceutical/PharmTxt';
import Our_Solutions from '../Pharmaceutical/Our_Solutions';
import TbasOutSolu from '../Pharmaceutical/TbasOutSolu';
import Faq from '../Pharmaceutical/Faq';
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';

function Nutrac() {
  const Category_Name = "Nutraceutical";
  const Category_URL = "https://sonaextrusion.com/Industry/Nutraceutical";
  const Category_Description = "Premium nutraceutical packaging containers that prioritize safety and sustainability. Explore durable, eco-friendly containers crafted for the health industry.";

const schema = `{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "${Category_Name}",
  "url": "${Category_URL}",
  "description": "${Category_Description}"
}`;
  return (
    <>
      <Helmet>
        <title>Nutraceutical Packaging Containers Manufacturer & Supplier</title>
        <meta name="description" content={Category_Description} />
        <script type="application/ld+json">
          {schema}
        </script>
      </Helmet>
      <Top />
      <Header />
      <Focus type="Nutrac" />
      <TopSliderPhar Type="Nut" />
      <PharmTxt Type="Nut" />
      <Our_Solutions Type="Nut" />
      <TbasOutSolu Type="Nut" />
      <Faq Type="Nut" />
      <Footer />
    </>

  )
}

export default Nutrac