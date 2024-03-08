import React from "react";
import Layout from "../Components/Home/Layout/Layout";
import Privacybanner from "../Components/Privacybanner/Privacybanner";
import PrivacyAbout from "../Components/PrivacyAbout/PrivacyAbout";
const Privacypage = () => {
  return (
    <Layout>
   <Privacybanner/>
  <PrivacyAbout/>
  </Layout>
  );
};

export default Privacypage;
