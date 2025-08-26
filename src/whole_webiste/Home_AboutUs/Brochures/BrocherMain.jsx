import React from 'react'
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Brochures from './Brochures';
// import TurnFlipBook from './TurnFlipBook';
// import BrocherNew from './BrocherNew';
import Focus from '../../Home/Focus';
import { Helmet } from 'react-helmet-async';
function BrocherMain() {
    const Category_Name = "Brochure";
    const Category_URL = "https://sonaextrusion.com/About/Brochures";
    const Category_Description = "Get access to Sonaextrusion brochures for a complete understanding of our products, services, and eco-conscious initiatives. Get now for detailed insights!";

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
                <title>Explore Sonaextrusion’s Product Brochures Online</title>
                <meta name="description" content={Category_Description}/>
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="Brochure" />
            <Brochures/>
            {/* <BrocherNew/> */}
            {/* <TurnFlipBook/> */}
            <Footer/>
        </>
    )
}

export default BrocherMain