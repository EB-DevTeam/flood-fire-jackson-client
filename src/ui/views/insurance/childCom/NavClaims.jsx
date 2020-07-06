import React from "react";
import One from "../../../../images/numberIcons/number-49.png";
import Two from "../../../../images/numberIcons/number-50.png";
import Three from "../../../../images/numberIcons/number-51.png";
import Four from "../../../../images/numberIcons/number-52.png";

export default function NavClaims() {
  return (
    <section className="navClaims__section-cont">
      <div>
        <div className="navClaims__h2-navy">
          <h2 className="navClaims__h2">Navigating Insurance Claims</h2>
        </div>
        <div className="navClaims__div-gridBox">
          <div className="navClaims__div-boxOne">
            <img src={One} alt="number one" />
          </div>
          <div className="navClaims__div-boxTwo">
            <h3>Mitigating Damage</h3>
          </div>
          <div className="navClaims__div-boxThree">
            <p>
            Most insurance policies breakdown what is and isn't covered. It also states that "in an emergency, action needs to be taken immediately to prevent any further loss". This provides a surety that we can start immediately saving what matters to you, if your insurance agent or their office is unavailable.
            </p>
          </div>
        </div>

        <div className="navClaims__div-gridBox">
          <div className="navClaims__div-boxOne">
            <img src={Two} alt="number two" />
          </div>
          <div className="navClaims__div-boxTwo">
            <h3>Submit Your Claim</h3>
          </div>
          <div className="navClaims__div-boxThree">
            <p>
            With the help of multi-certified technicians, we document and care for your loss. Our team works meticulously to submit all important information to your insurance agents and adjusters. While a claim number is being issued for your loss, we begin planning our next steps in your individual restoration process.
            </p>
          </div>
        </div>
        
        <div className="navClaims__div-gridBox">
          <div className="navClaims__div-boxOne">
            <img src={Three} alt="number three" />
          </div>
          <div className="navClaims__div-boxTwo">
            <h3>Adjuster Review</h3>
          </div>
          <div className="navClaims__div-boxThree">
            <p>
            In the next couple of days, an insurance adjuster will show up on site to review the damages. At this time, we meet with the adjuster to go over our process and plans, providing explanations for each decision we have made.  
            </p>
          </div>
        </div>

        <div className="navClaims__div-gridBox">
          <div className="navClaims__div-boxOne">
            <img src={Four} alt="number four" />
          </div>
          <div className="navClaims__div-boxTwo">
            <h3>Wrapping It Up</h3>
          </div>
          <div className="navClaims__div-boxThree">
            <p>
            Questions about billing typically arise as the repairs near completion. The costs of our services, in most cases, will be paid directly by your insurance provider. However, if you are issued a check by your insurance provider, you will ultimately be responsible for payment upon completion of the work.
            </p>
          </div>
        </div>

        
        <p className="buttonPadding">
        At Flood & Fire Solutions of Jackson, we’ve worked with all of the major insurance providers, and can navigate through the entire claims process with you quickly and efficiently. And because we understand that this type of event is often a first for our customers, the following offers a general road map for navigating through the entire process. If you have any questions about our services, how we work with insurance providers, or anything related to the insurance process, please feel free to contact us.
        </p>
        <a href="tel:2085217347" className="red-to-grey__button">
          (208) 521-9741
        </a>
      </div>
    </section>
  );
}
