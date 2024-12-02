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
    return (
        <>
            <Helmet>
                <title>Industry | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
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
