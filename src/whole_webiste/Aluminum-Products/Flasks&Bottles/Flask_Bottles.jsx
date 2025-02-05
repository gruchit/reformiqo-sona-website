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

function Flask_Bottles() {

    const Category_Name = "Flasks & Bottles";
    const Category_URL = "https://sonaextrusion.com/Aluminum-Products/Flasks-And-Bottles/";
    const Category_Description = "Looking for Eco-Friendly Packaging? Sona Extrusion Manufactures Custom Aluminum Bottles and Flasks, Ideal for Pharmaceutical, Cosmetic, and other Industries.";
  
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
                <title>Custom Aluminum Bottles & Flasks Supplier & Manufacturer</title>
                <meta name="keywords" content="Aluminum Bottles & Flasks" />
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="Flask_Bottles" />
            <Collapsible Type="Flask" />
            <ParalexImg Type="Flask" />
            <Trusted />
            <CollaSlider />
            <Our_Strength_Alum Type="Flask" />
            <Footer />
        </>
    )
}

export default Flask_Bottles