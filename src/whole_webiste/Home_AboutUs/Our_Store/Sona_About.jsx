import React, { useEffect, useState } from "react";
import '../../../assets/fonts/fonts.css'
import Helmet  from 'react-helmet';
import Top from '../../component/Top/Top.jsx'
import Header from '../../component/Header/Header.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import Company from './Company.jsx'
import Our_Strength from './Our_Strength.jsx'
import Know_More from './Know_More.jsx'
import Focus from '../../Home/Focus.jsx'
import Your_choice from './Your_choice.jsx'

function Sona_About() {
    return (
        <>
            <Helmet>
                <title>Our Store | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Our_Store" />
            <Your_choice />
            <Company />
            <Our_Strength />
            <Know_More />
            <Footer />

        </>
    )
}

export default Sona_About
