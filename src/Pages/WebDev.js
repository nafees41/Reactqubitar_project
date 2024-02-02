import React, { useState } from "react";
import Layout from "../Components/Home/Layout/Layout";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import CustomWeb from "../Components/WebDevelopment/CustomWeb/CustomWeb";
import Ecommerce from "../Components/WebDevelopment/Ecommerce/Ecommerce";
import JavaDev from "../Components/WebDevelopment/WebProcess/WebProcess";
import NodeJs from "../Components/WebDevelopment/NodeJs/NodeJs";
import WebBanner from "../Components/WebDevelopment/WebBanner/WebBanner";
import WordpressDev from "../Components/WebDevelopment/WordpressDev/WordpressDev";
import { useEffect } from "react";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Services from "../Components/Home/Services/Services";
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";


export default function WebDev() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <Layout>
     <WebBanner/>
     <WordpressDev/>
    <JavaDev/>
    <CustomWeb/>
    <OurApps/>
    <BookApointment/>
    <AngularJs/>
    < Services/>
  {/* <NodeJs/> */}
    {/* <Ecommerce/> */}
   </Layout>
  )
}








