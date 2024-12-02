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
    return (
        <>
            <Helmet>
                <title>Collapsible Tubes | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
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