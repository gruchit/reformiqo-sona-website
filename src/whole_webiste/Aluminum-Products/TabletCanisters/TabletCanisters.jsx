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


function TabletCanisters() {
    return (
        <>
            <Top />
            <Header />
            <Collapsible Type="Table"/>
            <ParalexImg Type="Table"/>
            <Trusted/>
            <CollaSlider/>
            <Our_Strength_Alum Type="Table"/>
            <Footer />
        </>

    )
}

export default TabletCanisters