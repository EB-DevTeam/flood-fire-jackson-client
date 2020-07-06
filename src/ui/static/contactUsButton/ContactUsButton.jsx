import React, { useState } from "react";

function ContactUsButton() {
  return (
    <aside className="contact-us-button">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeKdp99-wBmxQJCdLLKsHRCpS3dAjh706XG-TGx1tTp8522Rw/viewform?usp=sf_link"
        // onClick={() => Services.trackEvent("contact", "click", "contact form")}
        target="_blank"
        title="Book an online appointment now."
        className="
        contact-us-button-form 
        box-shadow"
      >
        <i className="fas fa-file-alt contact-us-button__icon file" />
      </a>

      <a
        href="tel:307-215-9741"
        // onClick={() => Services.trackEvent("contact", "click", "call")}
        className=" 
        contact-us-button-phone 
        box-shadow"
      >
        <i className="fas fa-phone contact-us-button__icon" />
      </a>


    </aside>
  );
}

export default ContactUsButton;
