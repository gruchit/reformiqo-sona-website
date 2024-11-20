import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Our_Client from '../../Home/Our_client'
import AllumColl from './AllumColl'
import Certificates from './Certificates'
import ProdCapa from './ProdCapa'

function ManufacturingUnit() {
  return (
    <>
    <Top />
    <Header />
    <AllumColl/>
    <Certificates/>
    <ProdCapa/>
    <Our_Client/>
    <Footer />
</>
  )
}

export default ManufacturingUnit