import React from 'react'
import Layout from '../Components/Home/Layout/Layout'
import Qualityprocess from '../Components/QA/Qualityprocess/Qualityprocess';
import Otherservicestwo from '../Components/Otherservicestwo/Otherservicestwo'
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Dataanalysisbanner from '../Components/Dataanalysis/Dataanalysisbanner/Dataanalysisbanner';
import Dataanalysisprocess from '../Components/Dataanalysis/Dataanalysisprocess/Dataanalysisprocess';
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import StakingPlatform from "../Components/NFTStaking/StakingPlatform/StakingPlatform";
import Dataanalysiscreation from '../Components/Dataanalysis/Dataanalysiscreation/Dataanalysiscreation';



const DataAnalysis = () => {
  return (
    <Layout>
    <Dataanalysisbanner/>
    <Dataanalysiscreation/>
    <Dataanalysisprocess/>
    <OurApps/>
    <BookApointment/>
  <Otherservicestwo/>
 </Layout>
  )
}

export default DataAnalysis
