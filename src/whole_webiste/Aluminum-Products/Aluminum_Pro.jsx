import React from 'react'
import Top from '../component/Top/Top'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import Focus from '../Home/Focus'
import AluMarketLed from './AluMarketLed'
import Product from '../Home/Product'
import AlumBenefit from './AlumBenefit'

function Aluminum_Pro() {
    return (
        <>
            <Top />
            <Header />
            <Focus type="Aluminium Products"/>
            <AluMarketLed/>
            <AlumBenefit/>
            <Product/>
            <Footer />
        </>
    )
}

export default Aluminum_Pro
