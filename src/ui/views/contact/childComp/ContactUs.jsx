import React from "react";

export default function ContactUs() {
  return (
    <section className="contactUs__section">
      <div className="imageRightFlush__div-gridBox contactUs_gridBox">
        <div className="contactUs__div-text">
          <h2>Contact Us</h2>
          <p className="buttonPadding">
          If you are in need of emergency restoration services please give us a call or fill out the quick contact form below. One of our technicians will assist you right away. We also love answering questions and going the extra mile to help so please don’t hesitate to get in touch!

          </p>
          <a className="red-to-grey__button" href="tel:3072159741">
            (307) 215-9741
          </a>
        </div>
        <div className="imageRightFlush__div-img contactUs_img"></div>
      </div>
    </section>
  );
}
