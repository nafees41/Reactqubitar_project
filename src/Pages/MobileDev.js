import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import AppServices from "../Components/MobileDevelopment/AppServices/AppServices";
import Categories from "../Components/MobileDevelopment/Categories/Categories";
import MobileBanner from "../Components/MobileDevelopment/MobileBanner/MobileBanner";
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Servicespage from "../Components/Otherservicestwo/Otherservicestwo";
import Testimonialspage from '../Components/WebDevelopment/AngularJS/AngularJs'
// import Wrapper from "../Components/Home/Banner/Banner.styled";

function MobileDev() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <MobileBanner/>
      {/* <CustomApp /> */}
      <Categories/>
      <AppServices/>
      <OurApps/>
      <BookApointment/>
      <Testimonialspage/>
      <Servicespage/>
   {/* <Testimonials /> */}
    </Layout>
  );
}

export default MobileDev;
