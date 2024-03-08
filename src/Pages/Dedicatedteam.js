import React from 'react'
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Dataanalysisbanner from '../Components/Dataanalysis/Dataanalysisbanner/Dataanalysisbanner';
import Layout from '../Components/Home/Layout/Layout';
import Dedicatedbanner from '../Components/Dedicatedteam/Dedicatedbanner/Dedicatedbanner';
import Otherservicestwo from '../Components/Otherservicestwo/Otherservicestwo'
import Dedicatedprocess from '../Components/Dedicatedteam/Dedicatedprocess/Dedicatedprocess';
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import StakingPlatform from "../Components/NFTStaking/StakingPlatform/StakingPlatform";




const Dedicatedteam = () => {
  return (
    <Layout>
        <Dedicatedbanner/>
        <Dedicatedprocess/>
        <OurApps/>
    <BookApointment/>
        <Otherservicestwo/>
    
    </Layout>
  )
}

export default Dedicatedteam
