/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import StakingBanner from "../Components/NFTStaking/StakingBanner/StakingBanner";
import StakingPlatform from "../Components/NFTStaking/StakingPlatform/StakingPlatform";
import StakingServices from "../Components/NFTStaking/StakingServices/StakingServices";
import StakingProcess from "../Components/NFTStaking/StakingProcess/StakingProcess";
import StakingFeatures from "../Components/NFTStaking/StakingFeatures/StakingFeatures";
import ICOBanner from "../Components/ICODevelopment/ICOBanner/ICOBanner";
import ICOServices from "../Components/ICODevelopment/ICOServices/ICOServices";
import Industries from "../Components/ICODevelopment/Industries/Industries";
import ICOFeatures from "../Components/ICODevelopment/ICOFeatures/ICOFeatures";
import ICOProcess from "../Components/ICODevelopment/ICOProcess/ICOProcess";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <ICOBanner />
      <ICOServices />
      <Industries />
      <ICOFeatures />
      <ICOProcess />
    {/* <Portfolio/> */}
      <AngularJs />
    </Layout>
  );
}

export default Home;
