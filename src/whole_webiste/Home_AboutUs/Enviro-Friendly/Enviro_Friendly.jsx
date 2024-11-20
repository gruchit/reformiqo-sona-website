import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import EnviTop from './EnviTop'
import Emission from './Emission'
import Missine from './Missine'

function Enviro_Friendly() {
    return (
        <>
            <Top />
            <Header />
            <EnviTop/>
            <Emission/>
            <Missine/>
            <Footer />
        </>
    )
}

export default Enviro_Friendly