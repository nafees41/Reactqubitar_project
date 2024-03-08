import React from "react";
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Otherservicestwo from '../Components/Otherservicestwo/Otherservicestwo'
import Serviceshero from "../Components/Serviceshero/Serviceshero";
import Layout from "../Components/Home/Layout/Layout";
import Aidevelopmentbanner from "../Components/AIdevelopment/AIdevelopmentbanner/AIdevelopmentbanner";
import AIdevelopmentprocess from "../Components/AIdevelopment/AIdevelopmentprocess/AIdevelopmentprocess";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import Aidevelopmentcreation from "../Components/AIdevelopment/Aidevelopmentcreation/Aidevelopmentcreation";


const AIdevelopment = () => {
  return (
    <Layout>
      <Aidevelopmentbanner/>
      <Aidevelopmentcreation/>
      <AIdevelopmentprocess/>
      <OurApps/>
    <BookApointment/>
      <Otherservicestwo/>
      {/* <AngularJs/> */}
    </Layout>
  );
};

export default AIdevelopment;
