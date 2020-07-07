import React, {useState} from "react";
// import Face from "../../../../images/socialMedia/iconFacebook.png";


export default function FormMap() {
  const [other, setOther] = useState("");
  const otherChange = (event) => {setOther(event.target.value);console.log(other)};

  return (
    <section className="formMap__section">
      <div className="formMap__div-gridBoxOne">
        <h2>Quick Contact Form</h2>
        <p>Call us at (307) 215-9741 for emergencies.</p>
        <p className="formMap__required required">* Required</p>

        {/* <!-- START CODING YOUR FORM --> */}
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKdp99-wBmxQJCdLLKsHRCpS3dAjh706XG-TGx1tTp8522Rw/formResponse" target="_blank">
          {/* <!-- SINGLE LINE TEXT FIELD --> */}
          <label htmlFor="name">
            Full Name<span className="required"> *</span>
          </label><br/>
          <input name="entry.73448527" type="text" id="name" /><br/>

          {/* <!-- SINGLE LINE TEXT FIELD --> */}
          <label htmlFor="address">
            Address<span className="required"> *</span>{" "}
          </label><br/>
          <input name="entry.122658944" type="text" id="address" /><br/>

          {/* <!-- SINGLE LINE TEXT FIELD --> */}
          <label htmlFor="phone">
            Phone Number<span className="required"> *</span>
          </label><br/>
          <input name="entry.347738545" type="tel" id="phone" /><br/>

          {/* <!-- SINGLE LINE TEXT FIELD --> */}
          <label htmlFor="email">Email Address</label><br/>
          <input name="entry.1655990480" type="email" id="email" /><br/>

          {/* <!-- MUTLIPLE CHOICE --> */}
          <label htmlFor="damageType">Damage Type <span className="required"> *</span></label>
      <div class="input-wrap"><input type="radio" name="entry.1898450243" id="e1" value="Water"/>
      <label for="e1">Water</label></div>
      <div class="input-wrap"><input type="radio" name="entry.1898450243" id="e2" value="Fire"/>
      <label for="e2">Fire</label></div>
      <div class="input-wrap"><input type="radio" name="entry.1898450243" id="e3" value="Mold"/>
      <label for="e3">Mold</label></div>
      <div className="input-wrap">
            <input
              type="radio"
              name="entry.1898450243"
              id="a4"
              value={other}
            />
            <label htmlFor="a4">Other: </label>
            <input className="other" name="entry.1898450243.other_option_response" type="text" value={other} onChange={otherChange} />
          </div>


          {/* <!-- CHECKBOXES -->
          <label htmlFor="damageType">Damage Type <span className="required"> *</span></label>
          <div className="input-wrap">
            <input
              type="radio"
              name="entry.1898450243"
              id="a1"
              value="Water Damage (Flooding, Drip Damage, Leaks)"
            />
            <label htmlFor="a1">Water Damage (Flooding, Drip Damage, Leaks)</label>
          </div>
          <div className="input-wrap">
            <input
              type="checkbox"
              name="entry.1898450243"
              id="a2"
              value="Mold Damage (Black Mold, Fungal Growth)"
            />
            <label htmlFor="a2">Mold Damage (Black Mold, Fungal Growth)</label>
          </div>
          <div className="input-wrap">
            <input
              type="checkbox"
              name="entry.1898450243"
              id="a3"
              value="Fire Damage"
            />
            <label htmlFor="a3">Fire Damage</label>
          </div>
          <div className="input-wrap">
            <input
              type="checkbox"
              name="entry.1898450243.other_option_response"
              id="a4"
              value={other}
            />
            <label htmlFor="a4">Other: </label>
            <input className="other" type="text" value={other} onChange={otherChange} />
          </div>
           */}

          {/* <!-- MULTI-LINE TEXT FIELD --> */}
          <label htmlFor="explain">Damage Description</label>
          <textarea name="entry.1777164916" id="explain" />

          {/* <!-- TIME INPUT --> */}
          <label htmlFor="explain">What time of day is best to contact you?</label>
          <input name="entry.1510609756" type="time" /><br/>


          {/* <!-- SUBMIT BUTTON --> */}
          <input className="button red-to-grey__button" type="submit" value="Submit" target="_blank"/>
        </form>
      </div>

      <div className="formMap__div-gridBoxTwo">
        <div>
          <h2>Our Service Area</h2>
          <iframe
            className="formMap__map"
            title="map of FFS address"
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
