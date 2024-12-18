import React, { useEffect, useState } from "react";
import '../../../assets/fonts/fonts.css'
import Helmet from 'react-helmet';
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
                <title>Sonaextrusion Store: Precision, Sustainability, Innovation</title>
                <meta
                    name="description"
                    content="Sonaextrusion’s store offers precision engineered extrusion products made for exceptional industrial performance. Designed to enhance efficiency. Visit Today!"
                />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Our_Store" />
            <Know_More />
            <Our_Strength />
            <Your_choice />
            <Company />
            <Footer />

        </>
    )
}

export default Sona_About
