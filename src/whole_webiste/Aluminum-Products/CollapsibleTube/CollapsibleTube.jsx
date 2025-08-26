import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Trusted from '../../Home/Trusted'
import Collapsible from './Collapsible'
import CollaSlider from './CollaSlider'
import ParalexImg from './ParalexImg'
import Our_Strength_Alum from './Our_Strength_Alum'
import Focus from '../../Home/Focus'
import Helmet from 'react-helmet';

function CollapsibleTube() {

    const Category_Name = "Collapsible Tubes";
    const Category_URL = "https://sonaextrusion.com/Aluminum-Products/Collapsible-Tubes";
    const Category_Description = "Trusted Aluminum Collapsible Tubes Manufacturer Offering Secure Solutions. Meet the Highest Quality Standards for Pharmaceuticals, Cosmetics, and Other Industries.";
  
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
                <title>Aluminum Collapsible Tubes Supplier & Manufacturer</title>
                <meta name="keywords" content="Aluminum Collapsible Tubes" />
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="CollapsibleTube" />
            <Collapsible Type="Colla" />
            <ParalexImg Type="Colla" />
            <Trusted />
            <CollaSlider />
            <Our_Strength_Alum Type="Colla" />
            <Footer />
        </>
    )
}

export default CollapsibleTube