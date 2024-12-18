import React from 'react'
import './ReachUs.css'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Order from '../../Home/Order'
import Our_client from '../../Home/Our_client'
import Trusted from '../../Home/Trusted'
import Frequently from '../../Industry/IndustryHome/Frequently'
import Helmet from 'react-helmet';
import Focus from '../../Home/Focus'

function ReachUs() {
    return (
        <>
        <Helmet>
                <title>Sona Extrusion - Reach Us for Support or Inquiries</title>
                
                <meta name="description" content="Contact Sona Extrusion for support, queries, or information. Find all the details you need on our Reach Us page. Get in touch today!" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="ReachUs" />
            <Order />
            <Our_client/>
            <Trusted/>
            <Frequently/>
            <Footer />
        </>
    )
}

export default ReachUs