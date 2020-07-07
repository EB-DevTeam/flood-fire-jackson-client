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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Contact Us - Servicing Jackson Hole | Flood &amp; Fire Solutions
        </title>
        <meta
          name="description"
          content="Contact Flood &amp; Fire Solutions Jackson today for your restoration needs. We are available 24/7."
        />
        <meta
          name="keywords"
          content="Phone, Email, contact, Flood &amp; Fire Solutions, Call, Contact Information, Restoration Company"
        />
      </Helmet>
      <ContactBanner />
      <ContactUs />
      <FormMap />
    </div>
  );
}

export default Contact;
