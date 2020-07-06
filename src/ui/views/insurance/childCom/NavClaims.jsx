import React from "react";
import One from "../../../../images/numberIcons/number-49";
import Two from "../../../../images/icons/two.png";
import Three from "../../../../images/icons/three.png";
import Four from "../../../../images/icons/four.png";

export default function NavClaims() {
  return (
    <section>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>

        
        <p className="buttonPadding">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <a href="tel:2085217347" className="navy-to-blue__button">
          (208) 521-9741
        </a>
      </div>
    </section>
  );
}
