import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import Banner from "../Components/Home/Banner/Banner";
import Project from "../Components/Home/Project/Project";
import Services from "../Components/Home/Services/Services";
import Chose from "../Components/Home/Chose/Chose";
import OurClient from "../Components/Home/OurClient/OurClient";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import Life from "../Components/Home/Life/Life";
import Faq from "../Components/Home/Faq/Faq";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import AboutUs from "../Components/Home/AboutUs/AboutUs";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var num = window.scrollTo(0, 0);
  console.log("the num is" + num);

  const backTOtop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Layout>
      <Banner />
      <Project />
       <AboutUs />
      <Services/>
      <Chose/>
      <OurClient />
      <Testimonials />
       {/* <Life /> */}
      <BookApointment />
      <Faq />
      <AngularJs />
    </Layout>
  );
}
