import React from 'react'
import '../../assets/fonts/fonts.css'
import Top from '../component/Top/Top'
import Header from '../component/Header/Header'
import Focus from './Focus'
import AboutSonaEx from './AboutSonaEx'
import YearOf from './YearOf'
import Product from './Product'
import Infinite from './Infinite'
import MarketLe from './MarketLe'
import Order from './Order'
import Our_client from './Our_client'
import UpComingEv from './UpComingEv'
import SonaMap from './SonaMap'
import Trusted from './Trusted'
import Counter from './Counter'
import Footer from '../component/Footer/Footer'
import BlogTxt from '../Resources/Blogs&Media/BlogTxt'


function Home() {
    return (
        <>
            <Top/>
            <Header/>
            <Focus type="Home"/>
            <AboutSonaEx/>
            <YearOf/>
            <Product/>                
            <Infinite/>
            <MarketLe/>
            <Order/>
            <Our_client/>
            <UpComingEv/>
            <Trusted/>
            <Counter/>
            <BlogTxt Type="Home" />
            <SonaMap/>
            <Footer/>
        </>
    )
}

export default Home
