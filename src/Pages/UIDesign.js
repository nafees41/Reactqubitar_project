/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";

import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

import UIDesignBanner from "../Components/UIDesign/UIDesignBanner/UIDeisgnBanner";
import WhatWeDo from "../Components/UIDesign/WhatWeDo/WhatWeDo";
import UIServices from "../Components/UIDesign/UIServices/UIServices";
import Process from "../Components/UIDesign/Process/Process";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";




function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
     <UIDesignBanner/>
     
    <WhatWeDo/>
    <UIServices/>

     
    <Process/>
   

     {/* <Portfolio/> */}
     <BookApointment/>
    
     <Testimonials/>


        </Layout>
    );
}

export default Home;
