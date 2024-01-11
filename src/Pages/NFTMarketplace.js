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
import MarketPlace from "../Components/NFTMarketplace/MarketplaceBanner/MarketPlace";
import BestServices from "../Components/NFTMarketplace/BestServices/BestServices";
import MarketFeatures from "../Components/NFTMarketplace/MarketFeatures/MarketFeatures";
import MarketProcess from "../Components/NFTMarketplace/MarketProcess/MarketProcess";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";




function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
    <MarketPlace/>
    <BestServices/>
    <MarketFeatures/>
    <MarketProcess/>

    
    

     {/* <Portfolio/> */}
     <BookApointment/>
     <Testimonials/>


        </Layout>
    );
}

export default Home;
