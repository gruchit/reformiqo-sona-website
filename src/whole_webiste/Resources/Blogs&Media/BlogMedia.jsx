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
                <title>Sona Extrusion Blog - Innovations, News, and Insights</title>
                <meta name="description" content="Sona Extrusion Blog Media provides expert insights, news, and trends to keep you informed about the latest in the extrusion industry. Visit now!" />
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