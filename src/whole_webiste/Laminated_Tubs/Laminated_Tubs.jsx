import React from 'react'
import Top from '../component/Top/Top'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import Why_Sona from './Why_Sona'
import Product from '../Home/Product'
import WhyPartner from './WhyPartner'
import Focus from '../Home/Focus.jsx'
import Helmet from 'react-helmet';
function Laminated_Tubs() {
    return (
        <>
        <Helmet>
                <title>High-Quality Laminated Tubes for Cosmetic & Industrial Needs</title>
                <meta name="keywords" content="Laminated Tubes" />
                <meta name="description" content="Laminated tubes by Sona Extrusion provide high-quality packaging for pharmaceuticals, cosmetics, and industrial products. Get Ideal packaging solutions!" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Laminated_Tubs"/>
            <Why_Sona/>
            <WhyPartner/>
            <Product type="Laminated_Tubs"/>
            <Footer />
        </>
    )
}

export default Laminated_Tubs
