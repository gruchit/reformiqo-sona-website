import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import BlogTxt from './BlogTxt'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';

function BlogMedia() {
    
    const Category_Name = "Blog & Media";
    const Category_URL = "https://sonaextrusion.com/Resources/BlogMedia";
    const Category_Description = "Sona Extrusion Blog Media provides expert insights, news, and trends to keep you informed about the latest in the extrusion industry. Visit now!";
  
  const schema = `{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${Category_Name}",
    "url": "${Category_URL}",
    "description": "${Category_Description}"
  }`;

    return (
        <>
            <Helmet>
                <title>Sona Extrusion Blog - Innovations, News, and Insights</title>
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="BlogMedia" />
            <BlogTxt />
            <Footer />
        </>
    )
}

export default BlogMedia