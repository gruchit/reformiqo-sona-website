import React from 'react';
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Our_Client from '../../Home/Our_client'
import AllumColl from './AllumColl'
import Certificates from './Certificates'
import ProdCapa from './ProdCapa'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';

function ManufacturingUnit() {
  return (
    <>
      <Helmet>
        <title>Manufacturing Unit | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
      </Helmet>
      <Top />
      <Header />
      <Focus type="ManufacturingUnit" />
      <AllumColl />
      <Certificates />
      <ProdCapa />
      <Our_Client />
      <Footer />
    </>
  )
}

export default ManufacturingUnit