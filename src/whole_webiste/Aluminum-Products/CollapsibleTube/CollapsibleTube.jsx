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
                <title>Aluminium Collapsible Tubes Supplier & Manufacturer</title>
                <meta name="keywords" content="Aluminium Collapsible Tubes" />
                <meta name="description" content="Trusted Aluminium Collapsible Tubes Manufacturer Offering Secure Solutions. Meet the Highest Quality Standards for Pharmaceuticals, Cosmetics, and Other Industries." />
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