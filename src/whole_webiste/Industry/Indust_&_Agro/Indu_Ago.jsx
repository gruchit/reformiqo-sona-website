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

function Indu_Ago() {

  const Category_Name = "Industrial & Agro-Chemical";
  const Category_URL = "https://sonaextrusion.com/Industry/Industrial-And-Agro-Chemical/";
  const Category_Description = "Reliable packaging solutions for industrial and agro-chemical products. Offering innovative, durable solutions to ensure the safety and quality of your products.";

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
        <title>Industrial & Agro-Chemical Packaging Manufacturer & Supplier</title>
        <meta name="description" content={Category_Description} />
        <script type="application/ld+json">
          {schema}
        </script>
      </Helmet>
      <Top />
      <Header />
      <Focus type="Indu_Ago" />
      <TopSliderPhar Type="Indu" />
      <PharmTxt Type="Indu" />
      <Our_Solutions Type="Indu" />
      <TbasOutSolu Type="Indu" />
      <Faq Type="Indu" />
      <Footer />
    </>
  )
}

export default Indu_Ago