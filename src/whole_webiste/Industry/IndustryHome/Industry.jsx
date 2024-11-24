import React from 'react'
import Top from '../../component/Top/Top.jsx'
import Header from '../../component/Header/Header.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import AboutSonaEx from '../../Home/AboutSonaEx.jsx'
import Counter from '../../Home/Counter.jsx'
import Focus from '../../Home/Focus.jsx'
import InWeSer from './InWeSer'
import Frequently from './Frequently.jsx' 
import IndustryTop from './IndustryTop.jsx'


function Industry() {
    return (
        <>
            <Top />
            <Header />
            <Focus type="Industry"/>
            <IndustryTop/>
            <InWeSer/>
            <Counter/>
            <Frequently/>
            <Footer />
        </>
    )
}

export default Industry
