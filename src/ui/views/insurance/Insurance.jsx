import React, { useEffect } from "react";
import Helmet from "react-helmet";
import InsuranceBanner from "./childCom/InsuranceBanner";
import InsuranceClaim from "./childCom/InsuranceClaim";
import NavClaims from "./childCom/NavClaims";

function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Insurance - Servicing Jackson Hole | Flood & Fire Solutions
        </title>
        <meta
          name="description"
          content="Flood & Fire Solutions Jackson takes all major insurance providers. We service Jackson Hole and surrounding areas."
        />
        <meta
          name="keywords"
          content="Restoration Company, Insurance Claim, Home Damage, Jackson Hole, Insurance Company, Restoration Insurance"
        />
      </Helmet>
      <InsuranceBanner />
      <InsuranceClaim />
      <NavClaims />
    </div>
  );
}

export default Insurance;
