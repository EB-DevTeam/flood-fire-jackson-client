import React from "react";
import Face from "../../../../images/socialMedia/iconFacebook.png";

export default function FormMap() {
  return (
    <section className="formMap__section">
      <div className="formMap__div-gridBoxOne">
        <h2>Quick Contact Form</h2>

              <form>
                <p>
                  Your Name*
                  <br />
                    <input
                      type="text"
                      name="your-name"
                      value=""
                      size="50"
                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                    />
                </p>
                <p>
                  Your Email*
                  <br />
                  <span class="wpcf7-form-control-wrap your-email">
                    <input
                      type="email"
                      name="your-email"
                      value=""
                      size="50"
                      class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </span>
                </p>
                <p>
                  Subject
                  <br />
                  <span class="wpcf7-form-control-wrap your-subject">
                    <input
                      type="text"
                      name="your-subject"
                      value=""
                      size="50"
                      class="wpcf7-form-control wpcf7-text"
                      aria-invalid="false"
                    />
                  </span>
                </p>
                <p>
                  Your Message
                  <br />
                  <span class="wpcf7-form-control-wrap your-message">
                    <textarea
                      name="your-message"
                      cols="50"
                      rows="10"
                      class="wpcf7-form-control wpcf7-textarea"
                      aria-invalid="false"
                    ></textarea>
                  </span>
                </p>
                <p>
                  <input
                    type="submit"
                    value="Send"
                    class="wpcf7-form-control wpcf7-submit blue-to-grey__button"
                  />
                </p>
                {/* <div class="wpcf7-response-output wpcf7-display-none"></div> */}
              </form>
          
      </div>
      <div className="formMap__div-gridBoxTwo">
        <div>
          <h2>Our Service Area</h2>
          <iframe
            className="formMap__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455312.6364096082!2d-111.26150066766182!3d43.2508899837101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53535a0f79d1682f%3A0x6ca85d54ec1d4a28!2sMc%20Coy%20Creek%20Rd%2C%20Idaho!5e0!3m2!1sen!2sus!4v1594047311714!5m2!1sen!2sus"
            style={{ width: "750", height: "600", frameBorder: "0" }}
          ></iframe>

          <p>
            <b>Address</b>
          </p>
          <p>#18 McCoy Creek Rd</p>
          <p>Alpine WY, 83128</p>
          <br />

          <p>
            <b>Phone: </b> (307) 215-9741
          </p>
          <p className="formMap__p-email">
            <b>Email: </b> admin@floodandfiresolutions.com
          </p>
        </div>
      </div>
    </section>
  );
}
