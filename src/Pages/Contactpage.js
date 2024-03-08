import React from 'react'
import Contacthero from '../Components/ContactUs/Contacthero/Contacthero'
import Layout from '../Components/Home/Layout/Layout'
import BookApointment from '../Components/Home/BookAppointment/BookApointment'
import OurApps from "../Components/MobileDevelopment/OurApps/OurApps";
import Servicespage from "../Components/Otherservicestwo/Otherservicestwo";
import Contactservices from '../Components/ContactUs/Contactservices/Contactservices';
import Contactform from '../Components/ContactUs/Contactform/Contactform';


const Contactpage = () => {
  return (
    <Layout>
     <div>
        <Contacthero/>
        <Contactform/>
        <Contactservices/>
        <OurApps/>
      </div>
    </Layout>
  )
}

export default Contactpage
