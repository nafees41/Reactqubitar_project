import React from 'react'
import Mvpbanner from '../Components/Mvp/Mvpbanner/Mvpbanner'
import Layout from '../Components/Home/Layout/Layout'
import Otherservicestwo from '../Components/Otherservicestwo/Otherservicestwo'
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Components/Home/BookAppointment/BookApointment";
import Mvpprocess from '../Components/Mvp/Mvpprocess/Mvpprocess';
import Mvpcreation from '../Components/Mvp/Mvpcreation/Mvpcreation';


const Mvp = () => {
  return (
   <Layout>
    <Mvpbanner/>
    <Mvpcreation/>
  <Mvpprocess/>
        <OurApps/>
    <BookApointment/>
        <Otherservicestwo/>
  </Layout>
  )
}

export default Mvp
