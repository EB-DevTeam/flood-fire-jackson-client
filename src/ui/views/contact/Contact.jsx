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
<<<<<<< HEAD
        
=======
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Contact Us - Servicing Jackson Hole | Flood & Fire Solutions
        </title>
        <meta
          name="description"
          content="Contact Flood & Fire Solutions Jackson today for your restoration needs. We are available 24/7."
        />
        <meta
          name="keywords"
          content="Phone, Email, contact, Flood & Fire Solutions, Call, Contact Information, Restoration Company"
        />
>>>>>>> d75efc878eee3c0b625be2ece2d2c95967ddedb0
      </Helmet>
      <ContactBanner />
      <ContactUs />
      <FormMap />
    </div>
  );
}

export default Contact;
