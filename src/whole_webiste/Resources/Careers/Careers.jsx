import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import BuildCareers from './BuildCareers'
import OrderDeliveryCrr from './OrderDeliveryCrr'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';

function Careers() {
  
  const Category_Name = "Careers";
  const Category_URL = "https://sonaextrusion.com/Resources/Careers";
  const Category_Description = "Build a rewarding career with Sona Extrusion. Discover current job openings and apply online to join our innovative and dynamic team today. Click Now!";

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
        <title>Join the Sona Extrusion Family - Exciting Career Opportunities</title>
        <meta name="description" content={Category_Description} />
        <script type="application/ld+json">
          {schema}
        </script>
      </Helmet>
      <Top />
      <Header />
      <Focus type="Careers" />
      <BuildCareers />
      <OrderDeliveryCrr />
      <Footer />
    </>
  )
}

export default Careers;