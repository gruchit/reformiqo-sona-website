import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Trusted from '../../Home/Trusted'
import Our_Strength from '../../Home_AboutUs/Our_Store/Our_Strength'
import Collapsible from './Collapsible'
import CollaSlider from './CollaSlider'
import ParalexImg from './ParalexImg'


function CollapsibleTube() {
    return (
        <>
            <Top />
            <Header />
            <Collapsible/>
            <ParalexImg Type="Colla"/>
            <Trusted/>
            <CollaSlider/>
            <Our_Strength/>
            <Footer />
        </>
    )
}

export default CollapsibleTube