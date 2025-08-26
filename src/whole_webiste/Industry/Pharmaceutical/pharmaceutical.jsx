import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import TopSliderPhar from './TopSliderPhar'
import PharmTxt from './PharmTxt'
import Our_Solutions from './Our_Solutions'
import TbasOutSolu from './TbasOutSolu'
import Faq from './Faq'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function pharmaceutical() {

    const Category_Name = "Pharmaceutical";
    const Category_URL = "https://sonaextrusion.com/Industry/Pharmaceutical";
    const Category_Description = "Manufacturer and Supplier of Premium Pharmaceutical Packaging Solutions. Prioritize Durability, Compliance, and Innovation to Ensure Your Products are Protected.";

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
                <title>High Quality Pharmaceutical Packaging Manufacturer & Supplier</title>
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="pharmaceutical" />
            <TopSliderPhar />
            <PharmTxt />
            <Our_Solutions />
            <TbasOutSolu />
            <Faq />
            <Footer />
        </>

    )
}

export default pharmaceutical