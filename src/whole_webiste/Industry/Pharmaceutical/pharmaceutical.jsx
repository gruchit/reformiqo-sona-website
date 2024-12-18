import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import TopSliderPhar from './TopSliderPhar'
import PharmTxt from './PharmTxt'
import Our_Solutions from './Our_Solutions'
import TbasOutSolu from './TbasOutSolu'
import Faq from './Faq'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function pharmaceutical() {
    
    return (
        <>
        <Helmet>
        <title>High Quality Pharmaceutical Packaging Manufacturer & Supplier</title>
        <meta name="description" content="Manufacturer and Supplier of Premium Pharmaceutical Packaging Solutions. Prioritize Durability, Compliance, and Innovation to Ensure Your Products are Protected." />
      </Helmet>
            <Top />
            <Header />
            <Focus type="pharmaceutical"/>
            <TopSliderPhar />
            <PharmTxt/>
            <Our_Solutions/>
            <TbasOutSolu/>
            <Faq/>
            <Footer />
        </>

    )
}

export default pharmaceutical