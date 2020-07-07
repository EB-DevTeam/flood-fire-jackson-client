import React, { useEffect } from "react";

import Helmet from "react-helmet";
import NaturalBanner from "./childComp/NaturalBanner";
import NaturalCallCallout from "./childComp/NaturalCallCallout";
import HaveYour from "./childComp/HaveYour";
import DisasterServices from "./childComp/DisasterServices";
import CraftsMatter from "./childComp/CraftsMatter";
import ExperiencedRestoration from "./childComp/ExperiencedRestoration";

function NaturalDisaster() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Natural Disaster - Servicing Jackson Hole | Flood &amp; Fire Solutions
        </title>
        <meta
          name="description"
          content=" Flood &amp; Fire Solutions Jackson repairs luxury homes damaged by snow, hail, storms and other natural disasters. We service Jackson Hole and surrounding areas."
        />
        <meta
          name="keywords"
          content="Smoke, Odor Removal, Fire Damage, Fire Cleanup, Restoration Company, Jackson Hole, Wyoming"
        />
      </Helmet>

      <NaturalBanner />
      <HaveYour />
      <NaturalCallCallout />
      <CraftsMatter />
      <DisasterServices />
      <ExperiencedRestoration />
    </div>
  );
}

export default NaturalDisaster;
