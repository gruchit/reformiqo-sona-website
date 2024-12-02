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
        <title>Industrial & Agro-Chemical | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
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