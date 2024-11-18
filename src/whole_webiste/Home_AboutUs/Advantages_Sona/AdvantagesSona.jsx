import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Map from '../../Home/SonaMap'
import Trusted from '../../Home/Trusted'
import AdvantagesTop from './AdvantagesTop'
import ThreTabs from './ThreTabs'
import CompanyChange from './CompanyChange'
import CMPsecond from './CMPsecond'
import WhyChoose from './WhyChoose'

function AdvantagesSona() {
  return (
    <>
      <Top />
      <Header />
      <AdvantagesTop/>
      <ThreTabs/>
      <Trusted/>
      <CompanyChange/>
      <WhyChoose/>
      {/* <CMPsecond/> */}
      <Map/>
      <Footer />
    </>
  )
}

export default AdvantagesSona