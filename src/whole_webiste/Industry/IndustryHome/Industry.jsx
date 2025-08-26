import React, { useEffect, useState } from "react";
import Top from '../../component/Top/Top.jsx'
import Header from '../../component/Header/Header.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import Counter from '../../Home/Counter.jsx'
import Focus from '../../Home/Focus.jsx'
import InWeSer from './InWeSer'
import Frequently from './Frequently.jsx'
import IndustryTop from './IndustryTop.jsx'
import Helmet from 'react-helmet';
import AboutSonaEx from '../../Home/AboutSonaEx.jsx'
import Loader from "../../component/Loader/Loader.jsx";

function Industry() {
    const Category_Name = "Industry";
    const Category_URL = "https://sonaextrusion.com/Industry";
    const Category_Description = "Sona Extrusion provides high-quality packaging materials for Pharmaceutical, Cosmetic & Personal Care, Nutraceutical, Industrial & Agro-Chemical industries. Get now!";

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
                <title>High Quality Packaging Materials for Diverse Industries</title>
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="Industry" />
            <IndustryTop />
            <InWeSer />
            <Counter />
            <Frequently />
            <Footer />

        </>
    )
}

export default Industry
