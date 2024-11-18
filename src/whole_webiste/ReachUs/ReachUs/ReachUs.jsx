import React from 'react'
import './ReachUs.css'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Order from '../../Home/Order'
import Our_client from '../../Home/Our_client'
import Trusted from '../../Home/Trusted'
import Frequently from '../../Industry/IndustryHome/Frequently'



function ReachUs() {
    return (
        <>
            <Top />
            <Header />
            <Order />
            <Our_client/>
            <Trusted/>
            <Frequently/>
            <Footer />
        </>
    )
}

export default ReachUs