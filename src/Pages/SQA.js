import React from "react";
import Qualitybanner from "../Components/QA/Qualitybanner/Qualitybanner";
import Layout from "../Components/Home/Layout/Layout";
import Qualityprocess from "../Components/QA/Qualityprocess/Qualityprocess";
import Otherservicestwo from "../Components/Otherservicestwo/Otherservicestwo";
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import StakingPlatform from "../Components/NFTStaking/StakingPlatform/StakingPlatform";
import Qualitycreation from "../Components/QA/Qualitycreation/Qualitycreation";

const SQA = () => {
  return (
    <Layout>
      <Qualitybanner />
      <Qualitycreation/>
      <Qualityprocess />
      <OurApps/>
      <BookApointment/>
      <Otherservicestwo/>
    </Layout>
  );
};

export default SQA;
