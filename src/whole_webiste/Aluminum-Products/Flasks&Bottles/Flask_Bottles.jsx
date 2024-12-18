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
function Flask_Bottles() {
    return (
        <>
        <Helmet>
        <title>Custom Aluminium Bottles & Flasks Supplier & Manufacturer</title>
        <meta name="keywords" content="Aluminium Bottles & Flasks" />
        <meta name="description" content="Looking for Eco-Friendly Packaging? Sona Extrusion Manufactures Custom Aluminium Bottles and Flasks, Ideal for Pharmaceutical, Cosmetic, and other Industries.
" />
    </Helmet>
            <Top />
            <Header />
            <Focus type="Flask_Bottles"/>
            <Collapsible Type="Flask"/>
            <ParalexImg Type="Flask"/>
            <Trusted/>
            <CollaSlider/>
            <Our_Strength_Alum Type="Flask"/>
            <Footer />
        </>
    )
}

export default Flask_Bottles