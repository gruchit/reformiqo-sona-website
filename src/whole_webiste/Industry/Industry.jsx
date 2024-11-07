import React from 'react'
import Top from '../component/Top/Top'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import AboutSonaEx from '../Home/AboutSonaEx'
import Counter from '../Home/Counter'
import Focus from '../Home/Focus'
import InWeSer from './InWeSer'
import Frequently from './Frequently.jsx' 


function Industry() {
    return (
        <>
            <Top />
            <Header />
            <Focus type="Industry"/>
            <AboutSonaEx/>
            <InWeSer/>
            <Counter/>
            <Frequently/>
            <Footer />
        </>
    )
}

export default Industry
