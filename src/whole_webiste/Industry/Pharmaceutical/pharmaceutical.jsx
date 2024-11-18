import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import TopSliderPhar from './TopSliderPhar'
import PharmTxt from './PharmTxt'
import Our_Solutions from './Our_Solutions'
import TbasOutSolu from './TbasOutSolu'
import Faq from './Faq'

function pharmaceutical() {
    return (
        <>
            <Top />
            <Header />
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