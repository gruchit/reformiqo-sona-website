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
        <title>Careers | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
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