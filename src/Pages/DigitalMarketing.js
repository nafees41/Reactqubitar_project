/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";

import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

import MarketingBanner from "../Components/DigitalMarketing/MarketingBanner/MarketingBanner";
import Onboarding from "../Components/DigitalMarketing/Onboarding/Onboarding";
import Start from "../Components/DigitalMarketing/Start/Start";
import Features from "../Components/DigitalMarketing/Features/Features";
import Process from "../Components/DigitalMarketing/Process/Process";
import Project from "../Components/Home/Project/Project";




function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
    <MarketingBanner/>
    <Project/>
    <Onboarding/>
    <Start/>
    <Features/>
    <Process/>
 

     <Portfolio/>
     <Testimonials/>


        </Layout>
    );
}

export default Home;
