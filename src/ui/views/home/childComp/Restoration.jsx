import React from "react";
import water from '../../../../images/homeIcons/waterIcon.png';
import fire from '../../../../images/homeIcons/fireIcon.png';
import mold from '../../../../images/homeIcons/moldIcon.png';
import natural from '../../../../images/homeIcons/naturalIcon.png';

export default function Restoration() {
  return (
    <section className="restoration__section">
      <div className="restoration__div-cont">
        <h2 className="restoration__h2">High-End Restoration</h2>
        <div className="restoration__div-iconsCont">
            
          <a href="/water">
          <div className="restoration__icon">
            <img src={water} alt="Water Icon" />
            <h3>Water Damage</h3>
          </div>            
          </a>

          <a href="/fire">
          <div className="restoration__icon">
            <img src={fire} alt="Fire Icon" />
            <h3>Fire Damage</h3>
          </div>
          </a>

          <a href="/mold">
          <div className="restoration__icon">
            <img src={mold} alt="Mold Icon" />
            <h3>Mold Remediation</h3>
          </div>
          </a>

          <a href="/natural-disaster">
          <div className="restoration__icon">
            <img src={natural} alt="Natural Disaster Icon" />
            <h3>Natural Disaster</h3>
          </div>
          </a>
          
        </div>
        <p className="restoration__p buttonPadding">If you are in need of emergency restoration in Jackson Hole, WY give Flood & Fire Solutions a call! We’re standing by 24/7 ready to help you & we guarantee the fastest response in the area. If you wake up at 3am in a panic because there has been a flood, fire or other disaster at your residence you can call us with confidence knowing you will get the prompt & professional service you deserve. If you are not in an emergency but need same day service, we have your back!</p>
        <a className="red-to-grey__button" href="tel:3072159741">
          {" "}
          (307) 215-9741
        </a>
      </div>
    </section>
  );
}
