import React from 'react'
import Layout from '../Components/Home/Layout/Layout'
import Web30banner from '../Components/Web30/web30banner/web30banner'
import Otherservicestwo from '../Components/Otherservicestwo/Otherservicestwo'
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Webservices from '../Components/Web30/Webservices/Webservices';
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import StakingPlatform from "../Components/NFTStaking/StakingPlatform/StakingPlatform";



const Web30 = () => {
  return (
    <Layout>
      <Web30banner/>
      <Webservices/>
        <OurApps/>
       <BookApointment/>
        <Otherservicestwo/>
        </Layout>
  )
}

export default Web30
