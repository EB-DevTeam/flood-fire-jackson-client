import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import ContactBanner from "./childComp/contactBanner";
import ContactUs from "./childComp/ContactUs";
import FormMap from "./childComp/FormMap";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        
      </Helmet>
      <ContactBanner />
      <ContactUs />
      <FormMap />
    </div>
  );
}

export default Contact;
