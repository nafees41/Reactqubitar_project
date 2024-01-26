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
import TokenBanner from "../Components/NFTToken/TokenBanner/TokenBanner";
import TokenPlatform from "../Components/NFTToken/TokenPlatform/TokenPlatform";




function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
     <TokenBanner/>
     <TokenPlatform/>
     
     <StakingPlatform/>
     <CreateStaking/>
     <StakingServices/>
     <StakingFeatures/>
     <StakingProcess/>

     {/* <Portfolio/>
     <Tech/> */}
     <Testimonials/>


        </Layout>
    );
}

export default Home;
