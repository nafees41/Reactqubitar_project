/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import AppServices from "../Components/MobileDevelopment/AppServices/AppServices";
import Categories from "../Components/MobileDevelopment/Categories/Categories";
import CustomApp from "../Components/MobileDevelopment/CutomApp/CustomApp";
import MobileBanner from "../Components/MobileDevelopment/MobileBanner/MobileBanner";
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import OtherServices from "../Components/Otherservices/OtherServices";
import Serviceshero from "../Components/Serviceshero/Serviceshero";

// import Wrapper from "../Components/Home/Banner/Banner.styled";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Serviceshero/>
      <OtherServices/>
       <OurApps/>
      <BookApointment/>
       </Layout>
  );
}

export default Services
