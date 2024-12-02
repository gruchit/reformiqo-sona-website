import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import BlogTxt from './BlogTxt'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function BlogMedia() {
    return (
        <>
        <Helmet>
                <title>Blog & Media | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="BlogMedia"/>
            <BlogTxt/>
            <Footer />
        </>
    )
}

export default BlogMedia