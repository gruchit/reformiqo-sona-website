import React from 'react';
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import EnviTop from './EnviTop'
import Emission from './Emission'
import Missine from './Missine'
import Focuse from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function Enviro_Friendly() {
    return (
        <>
            <Helmet>
                <title>Enviro-Friendly | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focuse type="EnviroFriendly" />
            <EnviTop />
            <Emission />
            <Missine />
            <Footer />
        </>
    )
}

export default Enviro_Friendly