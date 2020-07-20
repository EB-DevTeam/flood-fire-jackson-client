import React from "react";

function ContactUsButton() {
  return (
    <aside className="contact-us-button">
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
