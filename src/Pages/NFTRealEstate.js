/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import CreateStaking from "../Components/NFTStaking/CreateStaking/CreateStaking";
import RealBanner from "../Components/NFTRealEstate/RealEstateBanner/RealBanner";
import Tokenization from "../Components/NFTRealEstate/Tokenization/Tokenization";
import Benifits from "../Components/NFTRealEstate/Benifits/Benifits";
import RealEstateProcess from "../Components/NFTRealEstate/RealEstateProcess/RealEstateProcess";
import RealEstateFeatures from "../Components/NFTRealEstate/RealEstateFeatures/RealEstateFeatures";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <RealBanner />
      <Tokenization />
      <Benifits />
      <CreateStaking />
      <RealEstateFeatures />
      <RealEstateProcess />
      {/* <Portfolio/> */}
      <BookApointment />
      <AngularJs />
    </Layout>
  );
}

export default Home;
