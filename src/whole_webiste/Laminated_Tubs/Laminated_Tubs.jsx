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
                <title>Laminated Tubs | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Laminated_Tubs"/>
            <Why_Sona/>
            <WhyPartner/>
            <Product/>
            <Footer />
        </>
    )
}

export default Laminated_Tubs
