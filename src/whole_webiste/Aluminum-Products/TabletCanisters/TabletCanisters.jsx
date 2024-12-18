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
                <title>Aluminium Tablet Canisters Manufacturer - Safe Packaging</title>
                
                <meta name="keywords" content="Aluminium Tablet Canisters" />
                <meta name="description" content="Sona Extrusion delivers high-quality aluminium tablet canisters, ensuring safety and durability. We delivers eco-friendly packaging solutions for all industries." />
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