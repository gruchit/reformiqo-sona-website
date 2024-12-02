import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Infinite from '../../Home/Infinite'
import Trusted from '../../Home/Trusted'
import Our_Strength_Alum from '../CollapsibleTube/Our_Strength_Alum'
import Collapsible from '../CollapsibleTube/Collapsible'
import ParalexImg from '../CollapsibleTube/ParalexImg'
import CollaSlider from '../CollapsibleTube/CollaSlider'
import Focus from '../../Home/Focus'
import Helmet from 'react-helmet';
function TabletCanisters() {
    return (
        <>
            <Helmet>
                <title>Tablet & Canisters | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="TabletCanisters" />
            <Collapsible Type="Table" />
            <ParalexImg Type="Table" />
            <Trusted />
            <CollaSlider />
            <Our_Strength_Alum Type="Table" />
            <Footer />
        </>

    )
}

export default TabletCanisters