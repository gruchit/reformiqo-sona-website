import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Infinite from '../../Home/Infinite'
import Trusted from '../../Home/Trusted'
import Our_Strength_Alum from '../CollapsibleTube/Our_Strength_Alum'
import Collapsible from '../CollapsibleTube/Collapsible'
import ParalexImg from '../CollapsibleTube/ParalexImg'
import CollaSlider from '../CollapsibleTube/CollaSlider'
import Focus from '../../Home/Focus'
import Helmet from 'react-helmet';
function TabletCanisters() {
    const Category_Name = "Tablet Canisters";
    const Category_URL = "https://sonaextrusion.com/Aluminum-Products/Tablet-Canisters/";
    const Category_Description = "Sona Extrusion delivers high-quality aluminum tablet canisters, ensuring safety and durability. We delivers eco-friendly packaging solutions for all industries.";
  
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
                <title>Aluminum Tablet Canisters Manufacturer - Safe Packaging</title>
                <meta name="keywords" content="Aluminum Tablet Canisters" />
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="TabletCanisters" />
            <Collapsible Type="Table" />
            <ParalexImg Type="Table" />
            <Trusted />
            <CollaSlider />
            <Our_Strength_Alum Type="Table" />
            <Footer />
        </>

    )
}

export default TabletCanisters