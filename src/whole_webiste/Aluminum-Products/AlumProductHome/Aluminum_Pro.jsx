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
    return (
        <>
        <Helmet>
                <title>Aluminum Products | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Aluminium Products"/>
            <AluMarketLed/>
            <AlumBenefit/>
            <Product/>
            <Footer />
        </>
    )
}

export default Aluminum_Pro
