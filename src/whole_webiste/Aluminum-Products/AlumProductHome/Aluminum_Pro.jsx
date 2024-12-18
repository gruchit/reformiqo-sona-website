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
                <title> Aluminium Products Manufacturing for Diverse Industries</title>
                <meta name="keywords" content="Aluminium Products Manufacture" />
                <meta name="description" content="Aluminium Products Manufacturer Delivering Top-Quality, Durable Solutions for Industries Like Pharmaceuticals, Cosmetics, and Agro-Chemical Sectors. Get Now!" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Aluminium Products" />
            <AluMarketLed />
            <AlumBenefit />
            <Product type="Alume" />
            <Footer />
        </>
    )
}

export default Aluminum_Pro
