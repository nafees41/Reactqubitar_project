import React from "react";
import Layout from "../Components/Home/Layout/Layout";
import Packageshero from '../../src/Components/Packagehero/Packageshero'
import Featuredcard from '../../src/Components/Featuredcard/Featuredpackage'
import Contactservices from "../Components/ContactUs/Contactservices/Contactservices";
const Packages = () => {
  return (
    <Layout>
   <Packageshero/>
   <Featuredcard/>
   <Contactservices/>
   </Layout>
  );
};

export default Packages;
