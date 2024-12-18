import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import BuildCareers from './BuildCareers'
import OrderDeliveryCrr from './OrderDeliveryCrr'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function Careers() {
  return (
    <>
      <Helmet>
        <title>Join the Sona Extrusion Family - Exciting Career Opportunities</title>
        <meta name="description" content="Build a rewarding career with Sona Extrusion. Discover current job openings and apply online to join our innovative and dynamic team today. Click Now!" />
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