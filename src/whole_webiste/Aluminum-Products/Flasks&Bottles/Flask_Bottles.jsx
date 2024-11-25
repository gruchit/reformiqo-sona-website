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

function Flask_Bottles() {
    return (
        <>
            <Top />
            <Header />
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