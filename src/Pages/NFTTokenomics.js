/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";

import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

import TokenomicsBanner from "../Components/NFTTokenomics/TokenomicsBanner/TokenomicsBanner";
import TokenPlatform from "../Components/NFTToken/TokenPlatform/TokenPlatform";
import Benefits from "../Components/NFTTokenomics/Benefits/Benefits";
import Labs from "../Components/NFTTokenomics/Labs/Labs";
import Features from "../Components/NFTTokenomics/Features/Features";
import Process from "../Components/NFTTokenomics/Process/Process";




function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
     <TokenomicsBanner/>
     <Benefits/>

     <Labs/>
     <Features/>
     <Process/>
   

     {/* <Portfolio/>
     <Tech/> */}
     <Testimonials/>


        </Layout>
    );
}

export default Home;
