import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Focus from '../../Home/Focus'
import Product from '../../Home/Product'
import AluMarketLed from './AluMarketLed'
import AlumBenefit from './AlumBenefit'
import Helmet from 'react-helmet';
function Aluminum_Pro() {
    const Category_Name = "Aluminum Products";
    const Category_URL = "https://sonaextrusion.com/Aluminum-Products/";
    const Category_Description = "Aluminum Products Manufacturer Delivering Top-Quality, Durable Solutions for Industries Like Pharmaceuticals, Cosmetics, and Agro-Chemical Sectors. Get Now!";
  
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
                <title> Aluminum Products Manufacturing for Diverse Industries</title>
                <meta name="keywords" content="Aluminum Products Manufacture" />
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="Aluminium Products" />
            <AluMarketLed />
            <AlumBenefit />
            <Product type="Alume" />
            <Footer />
        </>
    )
}

export default Aluminum_Pro
