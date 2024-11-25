import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Trusted from '../../Home/Trusted'
import Collapsible from './Collapsible'
import CollaSlider from './CollaSlider'
import ParalexImg from './ParalexImg'
import Our_Strength_Alum from './Our_Strength_Alum'


function CollapsibleTube() {
    return (
        <>
            <Top />
            <Header />
            <Collapsible Type="Colla"/>
            <ParalexImg Type="Colla"/>
            <Trusted/>
            <CollaSlider/>
            <Our_Strength_Alum Type="Colla"/>
            <Footer />
        </>
    )
}

export default CollapsibleTube