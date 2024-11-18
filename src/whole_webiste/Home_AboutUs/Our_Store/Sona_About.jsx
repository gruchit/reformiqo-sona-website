import React from 'react'
import Top from '../../component/Top/Top.jsx'
import Header from '../../component/Header/Header.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import Company from './Company.jsx'
import Our_Strength from './Our_Strength.jsx'
import '../../../assets/fonts/fonts.css'
import Know_More from './Know_More.jsx'
import Focus from '../../Home/Focus.jsx'




import Your_choice from './Your_choice.jsx'

function Sona_About() {
    return (
        <>
            <Top />
            <Header />
            <Focus type="Our_Store"/>
            <Your_choice/>
            <Company/>
            <Our_Strength/>
            <Know_More/>
            <Footer />
        </>
    )
}

export default Sona_About
