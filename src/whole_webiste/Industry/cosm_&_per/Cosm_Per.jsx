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
function Cosm_Per() {
    const Category_Name = "Cosmetic & Personal Care";
    const Category_URL = "https://sonaextrusion.com/Industry/Cosmetic-And-Personal-Care/";
    const Category_Description = "Expert manufacturer of cosmetic and personal care packaging. We offer eco-friendly, innovative, and durable designs that reflect your brand’s unique identity.";

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
                <title>Cosmetic & Personal Care Packaging Manufacturer & Supplier</title>
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="Cosm_Per" />
            <TopSliderPhar Type="Cosm" />
            <PharmTxt Type="Cosm" />
            <Our_Solutions Type="Cosm" />
            <TbasOutSolu Type="Cosm" />
            <Faq Type="Cosm" />
            <Footer />
        </>
    );
}

export default Cosm_Per;
