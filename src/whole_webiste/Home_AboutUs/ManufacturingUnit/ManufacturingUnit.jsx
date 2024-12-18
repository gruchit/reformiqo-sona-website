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
        <title>The Backbone of Sonaextrusion: Our Manufacturing Excellence</title>
        <meta name="description" content="Sonaextrusion's Manufacturing Unit Is Powered by Modern Technology, Ensuring Precision and Durability in Every Product. Learn to Produce High-Quality Products!" />
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