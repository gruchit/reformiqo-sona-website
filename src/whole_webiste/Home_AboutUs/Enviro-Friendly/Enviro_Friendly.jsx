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
                <title>Sonaextrusion - Committed to Enviro-Friendly Strategy</title>
                <meta name="description" content="Sonaextrusion’s eco-conscious initiatives, from reducing waste to energy-efficient manufacturing. Learn how we prioritize sustainability in our operations!" />
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