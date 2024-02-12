/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";

import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import StakingBanner from "../Components/NFTStaking/StakingBanner/StakingBanner";
import StakingPlatform from "../Components/NFTStaking/StakingPlatform/StakingPlatform";
import CreateStaking from "../Components/NFTStaking/CreateStaking/CreateStaking";
import StakingServices from "../Components/NFTStaking/StakingServices/StakingServices";
import StakingProcess from "../Components/NFTStaking/StakingProcess/StakingProcess";
import StakingFeatures from "../Components/NFTStaking/StakingFeatures/StakingFeatures";
import NFTGamingBanner from "../Components/NFTGaming/NFTGamingBanner/NFTGamingBanner";
import GameDevelopment from "../Components/NFTGaming/GameDevelopment/GameDevelopment";
import FutureScope from "../Components/NFTGaming/FutureScope/FutureScope";
import GamingServices from "../Components/NFTGaming/GamingServices/GamingServices";
import GamingFeatures from "../Components/NFTGaming/GamingFeatures/GamingFeatures";
import GamingProcess from "../Components/NFTGaming/GamingProcess/GamingProcess";
import Servicespage from "../Components/Otherservicestwo/Otherservicestwo";
import Testimonialspage from '../Components/WebDevelopment/AngularJS/AngularJs'





function NFTGaming() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
   <NFTGamingBanner/>
    <GameDevelopment/>
    <FutureScope/>
    <GamingServices/>
    <GamingFeatures/>
    <GamingProcess/>


    
    

     {/* <Portfolio/> */}
     {/* <Tech/> */}
     <Testimonialspage/>
     <Servicespage />


        </Layout>
    );
}

export default NFTGaming;
