import React from 'react'
import './ReachUs.css'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Order from '../../Home/Order'
import Our_client from '../../Home/Our_client'
import Trusted from '../../Home/Trusted'
import Frequently from '../../Industry/IndustryHome/Frequently'
import Helmet from 'react-helmet';
import Focus from '../../Home/Focus'

function ReachUs() {
    return (
        <>
        <Helmet>
                <title>Reach Us | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="ReachUs" />
            <Order />
            <Our_client/>
            <Trusted/>
            <Frequently/>
            <Footer />
        </>
    )
}

export default ReachUs